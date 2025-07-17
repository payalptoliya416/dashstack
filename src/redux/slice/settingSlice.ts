
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
  siteName: string;
  seoTitle: string;
  seoKeywords: string;
  seoDescription: string;
  copyright: string;
  logo: string;
}

const initialState: SettingsState = {
  siteName: "",
  seoTitle: "",
  seoKeywords: "",
  seoDescription: "",
  copyright: "",
  logo: "",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<SettingsState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
