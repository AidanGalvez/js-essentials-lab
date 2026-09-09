import { useState } from 'react';
import NewScoreForm from './components/NewScoreForm';
import LeaderboardList from './components/LeaderboardList';
import CategoryFilter from './components/CategoryFilter';
import ScoreSummary from './components/ScoreSummary';
import './App.css'



function App() {
  const INITIAL_SCORES = [
    { 
      id: "s1", 
      playerInitials: "PAC", 
      gameTitle: "Pac-Man", 
      score: 3333360,
      category: "Arcade Classic"
    },
    { 
      id: "s2", 
      playerInitials: "MAR", 
      gameTitle: "Donkey Kong", 
      score: 1260700,
      category: "Arcade Classic"
    },
    { 
      id: "s3", 
      playerInitials: "ACE", 
      gameTitle: "Galaga", 
      score: 1599100,
      category: "Sci-Fi Shooter"
    }
  ];

  const[scores, setScores] = useState(INITIAL_SCORES)

  const addScoreHandler = (score) => {
    setScores((prevScores) => [score, ...prevScores]);
  }

  const [filterType, setFilterType] = useState("All Categories");

    const filterChangeHandler = (selectedType) => {
        setFilterType(selectedType);
    }

  const filteredScores = scores.filter((score)=>{
        if (filterType === "All Categories"){
            return true;
        }
        return score.category === filterType;
    });

  return (
    <div>
      <h1>Retro Arcade Leaderboard</h1>
      <NewScoreForm onAddScore={addScoreHandler}/>
      <CategoryFilter onChangeFilter={filterChangeHandler}/>
      <ScoreSummary items={filteredScores}/>
      <LeaderboardList items={filteredScores}/>
    </div>
  )
}

export default App
