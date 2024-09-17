import { useState,useEffect } from "react";


function RecentSearch({recent}) {
    const [recentSearches, setRecentSearches] = useState([]);

    useEffect(() => {
        const saveSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
        setRecentSearches(saveSearches);
    }, []);



    const addRecent = () => {
        setRecentSearches(prvSearches => {
            const updatedSearches = [...prvSearches];
            if (!updatedSearches.includes(recent)) {
                updatedSearches.unshift(recent);
                const lastSearches = updatedSearches.slice(0, 3);
                localStorage.setItem('recentSearches', JSON.stringify(lastSearches));
                return lastSearches;
            }
            return prvSearches;
        });
    };

    useEffect(() => {
        if (recent) {
            addRecent();
        }
    }, [recent]);
    
    const clearHistory = () => {
        localStorage.removeItem('recentSearches');
        setRecentSearches([]);
    };

  return (
    <div>
        {recentSearches.length > 0 ? (
                <>
                    <div>
                        {recentSearches.map((term, index) => (
                            <div key={index}>{term}</div>
                        ))}
                    </div>
                    <button onClick={clearHistory}>Clear history</button>
                </>
            ) : (
                <p>No recent searches</p>
            )}
    </div>
  )
}

export default RecentSearch




