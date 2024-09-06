import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import "./LOP.css"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  mobileNo: z.string().min(10, { message: "Mobile number must be at least 10 digits." }),
  gender: z.enum(["Male", "Female", "Prefer not to say"]),
  collegeName: z.string().min(2, { message: "College name must be at least 2 characters." }),
  courseName: z.string().min(2, { message: "Course name must be at least 2 characters." }),
  courseStatus: z.enum(["Pursuing", "Completed"]),
  employeeId: z.string().min(1, { message: "Employee ID is required." }),
  seniorName: z.string().min(2, { message: "Senior's name must be at least 2 characters." }),
  seniorContactNo: z.string().min(10, { message: "Contact number must be at least 10 digits." }),
  previousJobRole: z.string().min(2, { message: "Previous job role must be at least 2 characters." }),
  promotedTo: z.string().min(2, { message: "Position promoted to must be at least 2 characters." }),
  internshipDuration: z.enum(["2 months", "3 months", "Other"]),
  internshipDurationOther: z.string().optional(),
  joiningDate: z.string(),
  endDate: z.string(),
  date: z.string(),
  internshipRole: z.enum([
    "Human Resource",
    "Sales",
    "Scrum Master",
    "General Management",
    "Graphic Designing",
    "Social Media Marketing",
    "Digital Marketing",
    "Other"
  ]),
  internshipRoleOther: z.string().optional(),
  positionWorked: z.enum([
    "Associate",
    "Senior Associate",
    "Assistant Manager",
    "Deputy Manager",
    "Manager",
    "Senior Manager",
    "Executive",
    "Other"
  ]),
  positionWorkedOther: z.string().optional(),
  experienceRating: z.enum(["1", "2", "3", "4", "5"]),
})

const LOP = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
  })

const onSubmit = (data) => {
  const { internshipDuration, internshipRole, positionWorked, internshipDurationOther, internshipRoleOther, positionWorkedOther } = data;

  const filteredData = {
    ...data,
    internshipDurationOther: internshipDuration === "Other" && internshipDurationOther ? internshipDurationOther : undefined,
    internshipRoleOther: internshipRole === "Other" && internshipRoleOther ? internshipRoleOther : undefined,
    positionWorkedOther: positionWorked === "Other" && positionWorkedOther ? positionWorkedOther : undefined,
  };

  // Remove undefined properties from the data
  Object.keys(filteredData).forEach(key => filteredData[key] === undefined && delete filteredData[key]);

  console.log(filteredData);
};


  return (
    <div className="flex justify-center items-center min-h-screen bg-form-background">
      <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-8 text-center text-primary">Letter of Promotion</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
       
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="example@example.com" {...field} className="input-style" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} className="input-style" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mobileNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Mobile No</FormLabel>
                  <FormControl>
                    <Input placeholder="1234567890" {...field} className="input-style" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Gender</FormLabel>
                  <FormControl>
                    <div className="space-y-2">
                      {["Male", "Female", "Prefer not to say"].map((option) => (
                        <label key={option} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value={option}
                            {...field}
                            className="form-radio"
                            checked={field.value === option}
                            onChange={() => field.onChange(option)}
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="collegeName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">College Name</FormLabel>
                  <FormControl>
                    <Input placeholder="College Name" {...field} className="input-style" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="courseName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Course Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Course Name" {...field} className="input-style" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="courseStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Course Status</FormLabel>
                  <FormControl>
                    <div className="space-y-2">
                      {["Pursuing", "Completed"].map((status) => (
                        <label key={status} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value={status}
                            {...field}
                            className="form-radio"
                            checked={field.value === status}
                            onChange={() => field.onChange(status)}
                          />
                          <span>{status}</span>
                        </label>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="employeeId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Employee ID</FormLabel>
                  <FormControl>
                    <Input placeholder="Employee ID" {...field} className="input-style" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="seniorName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Senior's Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Senior's Name" {...field} className="input-style" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="seniorContactNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Senior's Contact No</FormLabel>
                  <FormControl>
                    <Input placeholder="Senior's Contact No" {...field} className="input-style" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="previousJobRole"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Previous Job Role</FormLabel>
                  <FormControl>
                    <Input placeholder="Previous Job Role" {...field} className="input-style" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="promotedTo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Position Promoted To</FormLabel>
                  <FormControl>
                    <Input placeholder="Position Promoted To" {...field} className="input-style" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="internshipDuration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Internship Duration</FormLabel>
                  <FormControl>
                    <div className="space-y-2">
                      {["2 months", "3 months", "Other"].map((duration) => (
                        <div key={duration} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value={duration}
                            {...field}
                            className="form-radio"
                            checked={field.value === duration}
                            onChange={() => {
                              field.onChange(duration);
                              if (duration !== "Other") {
                                form.setValue("internshipDurationOther", "");
                              }
                            }}
                          />
                          <span>{duration}</span>
                        </div>
                      ))}
                      {form.watch("internshipDuration") === "Other" && (
                        <Input
                          placeholder="Specify the duration"
                          {...form.register("internshipDurationOther")}
                          className="input-style mt-2"
                        />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="joiningDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Joining Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} className="input-style" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">End Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} className="input-style" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} className="input-style" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="internshipRole"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Internship Role</FormLabel>
                  <FormControl>
                    <div className="space-y-2">
                      {["Human Resource", "Sales", "Scrum Master", "General Management", "Graphic Designing", "Social Media Marketing", "Digital Marketing", "Other"].map((role) => (
                        <div key={role} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value={role}
                            {...field}
                            className="form-radio"
                            checked={field.value === role}
                            onChange={() => {
                              field.onChange(role);
                              if (role !== "Other") {
                                form.setValue("internshipRoleOther", "");
                              }
                            }}
                          />
                          <span>{role}</span>
                        </div>
                      ))}
                      {form.watch("internshipRole") === "Other" && (
                        <Input
                          placeholder="Specify the role"
                          {...form.register("internshipRoleOther")}
                          className="input-style mt-2"
                        />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="positionWorked"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Position You Have Worked</FormLabel>
                  <FormControl>
                    <div className="space-y-2">
                      {["Associate", "Senior Associate", "Assistant Manager", "Deputy Manager", "Manager", "Senior Manager", "Executive", "Other"].map((position) => (
                        <div key={position} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value={position}
                            {...field}
                            className="form-radio"
                            checked={field.value === position}
                            onChange={() => {
                              field.onChange(position);
                              if (position !== "Other") {
                                form.setValue("positionWorkedOther", "");
                              }
                            }}
                          />
                          <span>{position}</span>
                        </div>
                      ))}
                      {form.watch("positionWorked") === "Other" && (
                        <Input
                          placeholder="Specify the position"
                          {...form.register("positionWorkedOther")}
                          className="input-style mt-2"
                        />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="experienceRating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">How was your experience in organisation? (out of 5)</FormLabel>
                  <FormControl>
                    <div className="space-y-2">
                      {["1", "2", "3", "4", "5"].map((rating) => (
                        <label key={rating} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value={rating}
                            {...field}
                            className="form-radio"
                            checked={field.value === rating}
                            onChange={() => field.onChange(rating)}
                          />
                          <span>{rating}</span>
                        </label>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <Button type="submit" className="btn-primary">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default LOP









