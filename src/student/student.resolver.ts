import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Student } from './student.entity';
import { StudentService } from './student.service';
@Resolver(of => Student)
export class StudentResolver {
constructor(private studentService: StudentService) {}
@Query(returns => [Student])
students() {
return this.studentService.findAll();
}
@Query(returns => Student, { nullable: true })
student(@Args('id', { type: () => Int }) id: number) {
return this.studentService.findOne(id);
}
@Mutation(returns => Student)
createStudent(
@Args('firstName') firstName: string,
@Args('lastName') lastName: string,
@Args('email') email: string,
@Args('phone', { nullable: true }) phone?: string,
) {
return this.studentService.create({ firstName, lastName, email, phone });
}
@Mutation(returns => Student)
updateStudent(
@Args('id', { type: () => Int }) id: number,
@Args('firstName', { nullable: true }) firstName?: string,
@Args('lastName', { nullable: true }) lastName?: string,
@Args('email', { nullable: true }) email?: string,
@Args('phone', { nullable: true }) phone?: string,
) {
return this.studentService.update(id, { firstName, lastName, email, phone });
}
@Mutation(returns => Boolean)
removeStudent(@Args('id', { type: () => Int }) id: number) {
return this.studentService.remove(id);
}
}