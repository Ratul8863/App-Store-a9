import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Valuecontext } from "../Root/Root";

const AppDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const { users } = useContext(Valuecontext);

  const [app, setApp] = useState({});
  const [installed, setInstalled] = useState(false);
  const [wasInstalledOnce, setWasInstalledOnce] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const appDetails = data.find((singleApp) => singleApp.id === id);
    if (appDetails) {
      setApp(appDetails);
      setReviews(appDetails.reviews || []);

      // Check localStorage if this app was installed before
      const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
      setWasInstalledOnce(installedApps.includes(id));
    }
  }, [data, id]);

  const handleInstall = () => {
    if (!installed) {
      setIsDownloading(true);
      setTimeout(() => {
        setIsDownloading(false);
        setInstalled(true);
        setWasInstalledOnce(true);

        // Save install info in localStorage
        const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
        if (!installedApps.includes(id)) {
          installedApps.push(id);
          localStorage.setItem("installedApps", JSON.stringify(installedApps));
        }

        toast.success("App installed successfully!");
      }, 2000);
    } else {
      setInstalled(false);
      toast("App uninstalled.");
    }
  };

  const handleReviewSubmit = () => {
    if (!users) {
      toast.error("You must be logged in to submit a review.");
      return;
    }

    if (!wasInstalledOnce) {
      toast.error("You must install the app before submitting a review.");
      return;
    }

    if (!reviewText || !reviewRating || reviewRating < 1 || reviewRating > 5) {
      toast.error("Please enter a valid review and rating (1 to 5).");
      return;
    }

    const newReview = {
      user: users?.displayName || "Anonymous",
      userEmail: users?.email,
      rating: parseInt(reviewRating),
      comment: reviewText,
    };

    setReviews([newReview, ...reviews]);
    setReviewText("");
    setReviewRating("");
    toast.success("Review submitted!");
  };

  const handleDeleteReview = (indexToDelete) => {
    const updatedReviews = reviews.filter((_, i) => i !== indexToDelete);
    setReviews(updatedReviews);
    toast.success("Review deleted!");
  };

  const {
    name,
    developer,
    thumbnail,
    banner,
    downloads,
    category,
    rating,
    description,
    features,
  } = app;

  return (
    <div className="p-4 max-w-4xl mx-auto space-y-6">
      {/* Banner */}
      <img src={banner} alt="App Banner" className="w-full h-64 object-cover rounded-xl" />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-gray-500">By {developer}</p>
        </div>
        <button
          onClick={handleInstall}
          className={`px-4 py-2 rounded text-white transition ${
            isDownloading
              ? "bg-gray-400 cursor-wait"
              : installed
              ? "bg-red-600 hover:bg-red-700"
              : "bg-green-600 hover:bg-green-700"
          }`}
          disabled={isDownloading}
        >
          {isDownloading ? "Downloading..." : installed ? "Uninstall" : "Install"}
        </button>
      </div>

      {/* Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <img src={thumbnail} alt="App Thumbnail" className="w-full h-48 object-cover rounded" />
        <div>
          <p><strong>🗂️ Category:</strong> {category}</p>
          <p><strong>⬇️ Downloads:</strong> {downloads}</p>
          <p><strong>⭐ Rating: </strong> {rating}</p>
          <p className="mt-2 text-gray-700">{description}</p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            {(features || []).map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Reviews */}
      <div>
        <h2 className="text-xl font-bold mb-2">Reviews</h2>
        <div className="space-y-3">
          {reviews.length === 0 && <p className="text-gray-500">No reviews yet.</p>}
          {reviews.map((r, i) => (
            <div key={i} className="bg-gray-100 rounded p-3 relative">
              <p className="font-semibold">{r.user}</p>
              <p>⭐ {r.rating}</p>
              <p>{r.comment}</p>
              {r.userEmail === users?.email && (
                <button
                  onClick={() => handleDeleteReview(i)}
                  className="absolute top-2 right-2 text-red-600 text-sm"
                >
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Submit Review */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Submit Your Review</h3>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your review..."
          className="w-full border rounded p-2"
          rows="3"
        />
        <input
          type="number"
          min={1}
          max={5}
          value={reviewRating}
          onChange={(e) => setReviewRating(e.target.value)}
          placeholder="Rating (1 to 5)"
          className="w-full border rounded p-2"
        />
        <button
          onClick={handleReviewSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default AppDetails;
