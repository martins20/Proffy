import { Request, Response } from "express";
import database from "../../database/connection";

import convertHourToMinutes from "../../utils/ConvertHourToMinutes";

interface ScheduleItemType {
  week_day: number;
  from: string;
  to: string;
}

interface FiltersType {
  week_day?: number;
  subject?: string;
  time?: string;
}

class ClassesController {
  async index(req: Request, res: Response) {
    const filters: FiltersType = req.query;

    if (!filters.week_day || !filters.subject || !filters.time)
      return res
        .status(400)
        .json({ error: "Missing filters to search classes." });

    const timeInMinutes = convertHourToMinutes(filters.time);

    const classes = await database("classes")
      .whereExists(function () {
        this.select("class_schedules.*")
          .from("class_schedules")
          .whereRaw("`class_schedules`. `class_id` = `classes`.`id`")
          .whereRaw("`class_schedules`.`week_day`= ??", [
            Number(filters.week_day),
          ])
          .whereRaw("`class_schedules`. `from` <= ??", [timeInMinutes])
          .whereRaw("`class_schedules`. `to` > ??", [timeInMinutes]);
      })
      .where("classes.subject", "=", filters.subject)
      .join("users", "classes.user_id", "=", "users.id")
      .select(["classes.*", "users.*"]);
    return res.json(classes);
  }

  async store(req: Request, res: Response) {
    const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;

    const trx = await database.transaction();

    try {
      const insertedUsersIds = await trx("users").insert({
        name,
        avatar,
        whatsapp,
        bio,
      });

      const user_id = insertedUsersIds[0];

      const insertedClassesIds = await trx("classes").insert({
        subject,
        cost,
        user_id,
      });

      const class_id = insertedClassesIds[0];

      const classSchedule = schedule.map((scheduleItem: ScheduleItemType) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
        };
      });

      await trx("class_schedules").insert(classSchedule);

      await trx.commit();

      return res.status(201).send();
    } catch (err) {
      await trx.rollback();

      return res.status(400).json({
        error: "Unexpected error while creating new class",
      });
    }
  }
}

export default new ClassesController();
