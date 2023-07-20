import { getAllCohorts, getAllStudents } from "./userController";

describe("User Controller Tests", () => {
  describe("getAllCohorts", () => {
    it("should return all cohorts", async () => {
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };

      await getAllCohorts(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalled();
    });

    it("should handle errors and send error response", async () => {
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const error = new Error("Database error");
      jest.spyOn(db, "query").mockRejectedValueOnce(error);

      await getAllCohorts(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: error.message });
    });
  });

  describe("getAllStudents", () => {
    it("should return all students", async () => {
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };

      await getAllStudents(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalled();
    });

    it("should handle errors and send error response", async () => {
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const error = new Error("Database error");
      jest.spyOn(db, "query").mockRejectedValueOnce(error);

      await getAllStudents(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: error.message });
    });
  });

  // Add more tests for other controller functions
});
