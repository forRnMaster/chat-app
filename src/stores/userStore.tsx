import {create} from 'zustand';

interface userStoreState {
}

const useUserStore = create<userStoreState>((set) => ({
    user : {

    },
    // setUser: (user) => set((state)=>({user})),
}));

export default useUserStore;