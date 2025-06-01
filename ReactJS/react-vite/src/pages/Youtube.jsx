import React from "react";
import youtube from "../../../Projects/src/api/youtube";
import Search from "../components/Search";

const Youtube = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const onSubmitSearch = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  return (
    <div>
      <div>My Youtube dashboiard</div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
};

export default Youtube;
