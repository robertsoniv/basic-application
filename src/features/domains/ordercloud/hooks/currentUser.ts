import { Me, MeUser } from "ordercloud-javascript-sdk";
import { queryClient, useAuthMutation, useAuthQuery } from "../query";

export const useCurrentUser = () => {
  return useAuthQuery({
    queryKey: ["currentUser"],
    queryFn: async () => await Me.Get(),
    retry: false,
    refetchOnMount:false,
  });
};

export const useMutateCurrentUser = () => {
    return useAuthMutation({
        mutationKey: ["currentUser"],
        mutationFn: async (userData:Partial<MeUser>) => await Me.Patch(userData),
        onSuccess: (data) => {
            queryClient.setQueryData(["currentUser"], data)
        },
    })
}