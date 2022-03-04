initSidebarItems({"fn":[["binary","Apply a bitwise operation `op` to two inputs and return the result as a [`Bitmap`]."],["chunk_iter_to_vec","Creates a [`Vec<u8>`] from a [`TrustedLen`] of [`BitChunk`]."],["from_chunk_iter_unchecked","Creates a [Vec] from an [`Iterator`] of [`BitChunk`]."],["quaternary","Apply a bitwise operation `op` to four inputs and return the result as a [`Bitmap`]."],["ternary","Apply a bitwise operation `op` to three inputs and return the result as a [`Bitmap`]."],["unary","Apply a bitwise operation `op` to one input and return the result as a [`Bitmap`]."]],"mod":[["utils","General utilities for bitmaps representing items where LSB is the first item."]],"struct":[["Bitmap","An immutable container whose API is optimized to handle bitmaps. All quantities on this container’s API are measured in bits."],["MutableBitmap","A container to store booleans. [`MutableBitmap`] is semantically equivalent to [`Vec<bool>`], but each value is stored as a single bit, thereby achieving a compression of 8x. This container is the counterpart of [`Vec`] for boolean values. [`MutableBitmap`] can be converted to a [`Bitmap`] at `O(1)`. The main difference against [`Vec<bool>`] is that a bitmap cannot be represented as `&[bool]`."]]});