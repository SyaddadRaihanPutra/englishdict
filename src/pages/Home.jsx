import React, { useState } from "react";
import axios from "axios";
import Jumbotron from "../components/Jumbotron";

export default function Home() {
    const [meanings, setMeanings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState("");
  
    const handleChange = (e) => {
      const { value } = e.target;
      setInputValue(value);
      setLoading(true);
      if (value.trim() === "") {
        setMeanings([]);
        setLoading(false);
        return;
      }
      axios
        .get("https://api.dictionaryapi.dev/api/v2/entries/en/" + value)
        .then((res) => {
          setMeanings(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setMeanings([]);
          setLoading(false);
        });
    };
  
    return (
      <div className="container pt-5 mt-5">
        <Jumbotron />
        <h2 className="text-center mt-3 fw-semibold mb-4">Masukkan kata</h2>
        <div className="d-flex justify-content-center">
          <div className="col-md-4 ">
            <input
              className="form-control mb-3 rounded-5 py-2"
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Masukkan frasa/kata"
            />
          </div>
        </div>
        <div className="container mt-3">
          <div className="row justify-content-center gap-3">
            {loading && <p className="text-center">Getting Result....</p>}
            {!loading && inputValue.trim() === "" && <p></p>}
            {!loading && inputValue.trim() !== "" && meanings.length === 0 && (
              <p className="text-center">No result found</p>
            )}
            {meanings.map((meaning, index) => (
              <div className="col-md-6 col-12" key={index}>
                <div className="card">
                  <div className="card-header">{meaning.word}</div>
                  <div className="card-body">
                    {meaning.phonetic && <p>Phonetic: {meaning.phonetic}</p>}
                    {meaning.meanings.map((mean, index) => (
                      <div key={index}>
                        <p>
                          <strong>Part of Speech:</strong> {mean.partOfSpeech}
                        </p>
                        <p>
                          <strong>Definition:</strong>{" "}
                          {mean.definitions[0].definition}
                        </p>
                        {mean.definitions[0].example && (
                          <p>
                            <strong>Example:</strong>{" "}
                            {mean.definitions[0].example}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
