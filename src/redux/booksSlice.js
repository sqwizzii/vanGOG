import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBook = createAsyncThunk(
    "books/fetchBook",
    async (title) => {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}`);
        const data = await response.json();
        return data.items ? data.items[0].volumeInfo : null;
    }
);

const booksSlice = createSlice({
    name: "books",
    initialState: { book: null, status: "idle", error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBook.pending, (state) => { state.status = "loading"; })
            .addCase(fetchBook.fulfilled, (state, action) => { state.status = "succeeded"; state.book = action.payload; })
            .addCase(fetchBook.rejected, (state, action) => { state.status = "failed"; state.error = action.error.message; });
    }
});

export default booksSlice.reducer;
