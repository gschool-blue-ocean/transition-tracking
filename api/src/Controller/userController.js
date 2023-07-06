import { db } from "../db/database.js";
import { 
    allTasks, 
    speTask,
    addingTask, 
    deletingTask } from "./queries.js";

export const getAllTasks = async (req, res) => {
    try{
      const result = await db.query(allTasks);
      res.send(result.rows);

    } catch (error) {
      res.status(500).json({ error: error.message });
    };
  };
  
export const getSpeTask =  async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await db.query(speTask, [id]);
      res.send(result.rows[0]);

    } catch (error) {
      res.status(500).json({ error: error.message });
    };
  };
  
 export const addTasks = async (req, res) => {
    try{
      const { description } = req.body;
    
      const result = await db.query(addingTask, [description])
      res.send(result.rows[0]);

    } catch(error) {
      res.status(500).json({ error: error.message });
    };
  };
  
export const delTask =  async (req, res) => {
    try{
      const id = Number(req.params.id);
    
      await db.query(deletingTask, [id]).catch(next);
      res.sendStatus(204);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

