import type { UserData, GroupByDepartmentData } from "@/features/user/types/user.type";

export const groupByDepartment = (users: UserData[]) => {
    const departments = users.reduce((acc, user) => {
        const department = user.company.department

        if (!acc[department]) {
            acc[department] = {
                male: 0,
                female: 0,
                ageRange: `${user.age}-${user.age}`,
                hair: {},
                addressUser: {}
            }
        }
        const obj = acc[department]

        obj[user.gender]++

        const [min, max] = obj.ageRange.split('-')
        obj.ageRange = `${Math.min(Number(min), user.age)}-${Math.max(Number(max), user.age)}`

        if (!obj.hair[user.hair.color]) {
            obj.hair[user.hair.color] = 0
        }
        obj.hair[user.hair.color]++

        const fullName = `${user.firstName}${user.lastName}`
        obj.addressUser[fullName] = user.address.postalCode

        return acc
    }, {} as GroupByDepartmentData);

    return departments;

}