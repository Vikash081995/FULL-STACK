export const UserRolesEnum={
    ADMIN:"admin",
    PROJECT_ADMIN:"project_admin",
    MEMBER :'member'
}

export const AvailableUserRole = Object.values(UserRolesEnum)

export const TaskStatusEnum ={
    TODO :'todo',
    INPROGRESS:'Inprogress',
    DONE:'done'
}

export const AvailableTaskStatuses = Object.values(TaskStatusEnum)