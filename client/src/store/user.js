import create from 'zustand'

const useUserStore = create((set) => ({
    walletId: "",
    username: "",
    accessToken: "",
    refreshToken: "",
    setUser: ((walletId,  refreshToken, accessToken) => set({walletId,  refreshToken, accessToken})),
    setUsername: ((username) => set({username})),
    // setWalletId: (walletId) => set(() => ({ walletId })),
    // setAccessToken: (accessToken) => set(() => ({ accessToken })),
    // setRefreshToken: (refreshToken) => set(() => ({ refreshToken })),
    logoutRevocation: () => set({ walletId: "", accessToken: "", refreshToken: "" }),
}))

export default useUserStore