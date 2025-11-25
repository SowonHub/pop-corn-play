import { databaseAuthClient } from "@/auth/client";

const TABLE_NAME = "wishlist";

export const wishlistService = {
  async getItems(userId) {
    const { data, error } = await databaseAuthClient
      .from(TABLE_NAME)
      .select("movie")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }
    // data is [{ movie: { ... } }, { movie: { ... } }]
    return (data || []).map((item) => item.movie);
  },

  async addItem(userId, movie) {
    // Ensure movie is serializable and contains necessary fields
    // This matches the normalizeMovie logic, but we save the whole object usually or just what we need.
    // The previous implementation stored a specific shape. We should probably stick to that to save space/bandwidth.
    const { error } = await databaseAuthClient.from(TABLE_NAME).insert({
      user_id: userId,
      movie_id: movie.id,
      movie: movie,
    });
    if (error) {
      throw error;
    }
  },

  async removeItem(userId, movieId) {
    const { error } = await databaseAuthClient
      .from(TABLE_NAME)
      .delete()
      .eq("user_id", userId)
      .eq("movie_id", movieId);
    if (error) {
      throw error;
    }
  },
};
