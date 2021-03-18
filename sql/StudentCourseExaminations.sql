/****** Script for SelectTopNRows command from SSMS  ******/
SELECT a.FullName, e.CourseExaminationId, u.Path
  FROM [dbo].[AspNetUsers] a
  LEFT JOIN[dbo].[StudentCourseExaminations] e
  ON e.UserId = a.Id
  LEFT JOIN [dbo].[StudentExaminationUploads] u
  ON e.Id = u.StudentCourseExaminationId
