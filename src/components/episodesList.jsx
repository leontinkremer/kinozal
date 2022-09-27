import React, { useState } from "react";
import { episodes } from "../fakeStorage/episodes"; // Добивим импорт
import Episode from "./episode"; // Импорт компонента
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";

const EpisodesList = () => {
    const count = episodes.length; // количество записей
    // console.log("count", count);

    const pageSize = 9; // количество записей на странице, которое хотим выводить

    const [currentPage, setCurrentPage] = useState(1);

    // Принимает pageIndex
    function handlePageChange(pageIndex) {
        setCurrentPage(pageIndex);
    }

    const pageEpisodes = paginate(episodes, currentPage, pageSize);

    return (
        <div className="container">
            <div className="row">
                {/* Добавим вывод эпизодов */}
                {pageEpisodes.map((episode) => (
                    <Episode key={episode.id} {...episode} />
                ))}
            </div>
            <div className="row">
                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default EpisodesList;
