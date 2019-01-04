
export const push_result = (id, list, newItem ) => {
    newItem.id = id;
    list.push(newItem);
    return list;
}