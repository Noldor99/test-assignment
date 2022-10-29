import {useMemo} from "react";

export const useSortedPosts = (sort, users) => {
    const sortedUsers = useMemo(() => {
        if(users) {
            return users.sort((a, b) => (a[sort] > b[sort]) ? -1 : 1)
          }
          return users;
    },[sort, users])

    return sortedUsers;
}
