import { apiClient } from "../apiClient";
import { toast } from "sonner";
import { useUserStore } from "@/store/useUserStore";

export const getCurrentUser = async (login) => {
  try {
    const response = await apiClient.get("login/");

    if (response.status === 200) {
      //   showMessage("success", `welcome ${response?.data?.firstname}`, 1);
      // console.log(response);
      login(response.data?.User);
      useUserStore.getState().setUser(response.data.user);

      // dispatch(loginAction(response?.data.User));
      return response;
    }
  } catch (error) {
    console.error(error.response?.data);
    if (error.response?.data?.detail) {
      toast.error(error.response?.data?.detail, {
        duration: 1000, // Show for 5 seconds
        position: "top-center", // Can be "top-left", "top-center", "bottom-left", etc.
        action: {
          label: "Retry",
          onClick: () => getCurrentUser(),
        },
        style: {
          background: "#ff4d8f",
          color: "#fff",
          borderRadius: "8px",
        },
      });
    }
    // showMessage(
    //   "error",
    //   error?.response?.data?.error || "An error occurred",
    //   3
    // );
    // throw error
  }
};

export const handleServerLogin = async (data, navigate) => {
  console.log(data);
  const toastId = toast.loading("Logging in..."); // Show loading toast

  try {
    const response = await apiClient.post("login/", data);

    if (response.status === 200) {
      // useUserStore.getState().setUser(response.data.user);

      toast.success("Login successful!", { id: toastId }); // Replace loading toast with success
      return response;
    }
  } catch (error) {
    toast.error(
      error.response?.data?.detail || "Login failed. Please try again.",
      { id: toastId }
    );
  } finally {
    toast.dismiss(toastId); // Ensure toast is removed in case of any unexpected issues
  }
};

export const handleServerRegister = async (data, navigate) => {
  const toastId = toast.loading("Registering..."); // Show loading toast
  try {
    const response = await apiClient.post("register/", data);
    console.log("Server Register", response)
    if (response.status === 201) {
      toast.success("Registration successful!", { id: toastId }); // Replace loading toast with success
      navigate("/login");
    }
  } catch (error) {
    console.log("registrartion error",error);
    toast.error(
      error.response?.data?.detail || "Registration failed. Please try again.",
      { id: toastId }
    );
  } finally {
    toast.dismiss(toastId);
  }
};

export const handleServerReset = async (data, navigate) => {
  const toastId = toast.loading("sending Server Reset")
  try {
    const response = await apiClient.post("password/reset/", data);
    console.log("Server Reset", response)
    if (response.status === 200) {
      
      toast.success("Reset password sent successfully", { id: toastId });
      // navigate("/login");
    } else {
      toast.error("Failed to send reset password", { id: toastId });
    }
  } catch (e) {
    console.log(e);
    toast.error("Failed to send reset password", { id: toastId });
  } finally {
    toast.dismiss(toastId);
  }
}
export const logoutUser = async (logout, navigate) => {
  try {
    await apiClient.delete("logouts");
    logout();
    navigate("/login");
  } catch (error) {
    console.error("Logout failed:", error);
  }
};
