"use client";
import { useState, useEffect } from "react";
import { fetchAllParticipants } from "../actions"

export default function Home() {
  const [participants, setParticipants]  = useState([]);

  const fetchParticipants = async () => {
    try {
      const fetchedParticipants = await fetchAllParticipants();
      fetchedParticipants.sort((a, b) => a.serial - b.serial);
      setParticipants(fetchedParticipants);
    } catch (error) {
      console.log(error);
    }
  };

  // const [participant, setParticipant] = useState<IndexState['participant']>('')

  useEffect(() => {
    fetchParticipants();
  }, []);

  return (
    <div className="flex flex-col items-center pt-4 bg-rose-100/[0.2] h-full">

      <h1
        className="text-red-800 font-bold text-2xl pt-4 font-raleway"
        style={{
          textShadow:
            "rgb(43, 191, 255) 4px 0px 0px, rgb(43, 191, 255) 3.87565px 0.989616px 0px, rgb(43, 191, 255) 3.51033px 1.9177px 0px, rgb(43, 191, 255) 2.92676px 2.72656px 0px, rgb(43, 191, 255) 2.16121px 3.36588px 0px, rgb(43, 191, 255) 1.26129px 3.79594px 0px, rgb(43, 191, 255) 0.282949px 3.98998px 0px, rgb(43, 191, 255) -0.712984px 3.93594px 0px, rgb(43, 191, 255) -1.66459px 3.63719px 0px, rgb(43, 191, 255) -2.51269px 3.11229px 0px, rgb(43, 191, 255) -3.20457px 2.39389px 0px, rgb(43, 191, 255) -3.69721px 1.52664px 0px, rgb(43, 191, 255) -3.95997px 0.56448px 0px, rgb(43, 191, 255) -3.97652px -0.432781px 0px, rgb(43, 191, 255) -3.74583px -1.40313px 0px, rgb(43, 191, 255) -3.28224px -2.28625px 0px, rgb(43, 191, 255) -2.61457px -3.02721px 0px, rgb(43, 191, 255) -1.78435px -3.57996px 0px, rgb(43, 191, 255) -0.843183px -3.91012px 0px, rgb(43, 191, 255) 0.150409px -3.99717px 0px, rgb(43, 191, 255) 1.13465px -3.8357px 0px, rgb(43, 191, 255) 2.04834px -3.43574px 0px, rgb(43, 191, 255) 2.83468px -2.82216px 0px, rgb(43, 191, 255) 3.44477px -2.03312px 0px, rgb(43, 191, 255) 3.84068px -1.11766px 0px, rgb(43, 191, 255) 3.9978px -0.132717px 0px",
        }}
      >
        Participants
      </h1>
      {/* {loading && (<h1>Loading members list</h1>)} */}
      {participants?.length > 0 && (
        <table className="self-start m-4 bg-[#96ffff] text-slate-950 border border-black table-auto font-raleway">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Claimed</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((participantObject, index) => (
              <tr
                key={index}
                className={`${index % 2 === 1 ? "" : "bg-green-400"}`}
              >
                <td>{participantObject.serial}</td>
                <td>{participantObject.name}</td>
                <td>
                  {participantObject.claimed ? "Yes" : "No"}
                  {true}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
