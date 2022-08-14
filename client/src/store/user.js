import create from 'zustand'

const useUserStore = create((set) => ({
    walletId: "",
    accessToken: "",
    refreshToken: "",
    setUser: ((walletId, accessToken, refreshToken) => set({walletId, accessToken, refreshToken})),
    // setWalletId: (walletId) => set(() => ({ walletId })),
    // setAccessToken: (accessToken) => set(() => ({ accessToken })),
    // setRefreshToken: (refreshToken) => set(() => ({ refreshToken })),
    logoutRevocation: () => set({ walletId: "", accessToken: "", refreshToken: "" }),
}))

export default useUserStore