export function todoMapper(todo:) {
    return {
        id: todo.id,
        title: todo.title,
        done: todo.done,
        createdAt: todo.createdAt,
        updatedAt: todo.updatedAt,
        userId: todo.userId
    };
}