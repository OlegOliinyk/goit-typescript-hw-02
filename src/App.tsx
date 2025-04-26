import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const API_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "CLgKt9Taq-SJV1v7aM1JXl51cdQQjusciHZHqwxMUQA";

interface UnsplashImage {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
  width: number;
  height: number;
  likes: number;
  user: {
    name: string;
  };
}

interface UnsplashSearchResponse {
  results: UnsplashImage[];
  total: number;
  total_pages: number;
}

const App: React.FC = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(
    null
  );
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      setError(null);

      try {
        const response: AxiosResponse<UnsplashSearchResponse> = await axios.get(
          API_URL,
          {
            params: { query, page, per_page: 24, client_id: API_KEY },
          }
        );
        if (page === 1) {
          setImages(response.data.results);
          setTotalPages(response.data.total_pages);
        } else {
          setImages((prevImages) => [...prevImages, ...response.data.results]);
        }
      } catch (error: any) {
        console.log(error);
        setError("Failed to fetch images. Try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="">
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSearch} />
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <ImageGallery images={images} onImageClick={setSelectedImage} />
      )}
      {loading && <Loader />}
      {images.length > 0 && totalPages > page && !loading && (
        <LoadMoreBtn onClick={loadMore} />
      )}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        image={selectedImage}
      />
    </div>
  );
};

export default App;
