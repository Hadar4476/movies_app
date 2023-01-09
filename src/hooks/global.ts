import { ref } from "vue";

const useGlobal = () => {
  const isLoading = ref(false);
  const error = ref("");

  const setLoading = (): void => {
    isLoading.value = true;
  };

  const setFinished = (): void => {
    isLoading.value = false;
  };
  const setError = (value: string): void => {
    error.value = value;
  };

  return {
    isLoading,
    error,
    setLoading,
    setFinished,
    setError,
  };
};

export default useGlobal;
