import { useEffect, useState } from "react";
// Components
import DataList from "../Components/DataList";
import Loader from "../Shared/Loader";
// Hooks
import { useHttpClient } from "../Hooks/http-hook";
// Model
import { Player } from "../Models/player.model";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// TODO use Error and clearError properties from useHttpClient hook
// Need to show error and after that to clear it

const HomePage = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    // Fetching players
    const fetchPlayers = async () => {
      try {
        const responseData = await sendRequest(`${API_BASE_URL}/api/players`);
        setPlayers(responseData?.players);
      } catch (err) {}
    };
    fetchPlayers();
  }, [sendRequest]);

  return (
    <>
      <h1>Players</h1>
      <div>
        {players?.length && <DataList items={players} />}
        {isLoading && <Loader />}
      </div>
    </>
  );
};

export default HomePage;
