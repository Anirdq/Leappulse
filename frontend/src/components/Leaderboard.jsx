import React, { useState, useEffect } from 'react';

const initialUsers = [
    { id: 1, name: 'You', streak: 12, points: 2400, avatar: 'YO', isCurrentUser: true },
    { id: 2, name: 'Sarah K.', streak: 15, points: 2850, avatar: 'SK', isCurrentUser: false },
    { id: 3, name: 'Mike R.', streak: 8, points: 1900, avatar: 'MR', isCurrentUser: false },
    { id: 4, name: 'Jessica L.', streak: 20, points: 3100, avatar: 'JL', isCurrentUser: false },
    { id: 5, name: 'David B.', streak: 5, points: 1200, avatar: 'DB', isCurrentUser: false },
];

const Leaderboard = () => {
    const [users, setUsers] = useState(initialUsers);

    // Simulate real-time updates
    useEffect(() => {
        const interval = setInterval(() => {
            setUsers(currentUsers => {
                const updatedUsers = currentUsers.map(user => {
                    // Randomly update points for other users to simulate activity
                    if (!user.isCurrentUser && Math.random() > 0.7) {
                        return {
                            ...user,
                            points: user.points + Math.floor(Math.random() * 50),
                            streak: Math.random() > 0.9 ? user.streak + 1 : user.streak
                        };
                    }
                    return user;
                });

                // Sort by points descending
                return [...updatedUsers].sort((a, b) => b.points - a.points);
            });
        }, 3000); // Update every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 border border-gray-100">
            <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.699-3.181a1 1 0 011.827 0l1.699 3.181L19 6.323V5.323a1 1 0 012 0v2.926l-1.97.788-2.6-4.87-2.6 4.87-1.97-.788V5.323a1 1 0 011-1z" clipRule="evenodd" />
                        <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM13.332 9.46a2 2 0 01-1.99 2.153h-.002c-1.107 0-1.99-1.076-1.99-2.152S10.235 7.309 11.343 7.309c1.107 0 1.989 1.076 1.989 2.152z" />
                        {/* Using a simpler trophy icon path for compatibility/clarity if needed, but standard heroicons usually work */}
                        <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A1 1 0 013.707 10.707L10 17.001l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Syndicate Leaderboard
                </h2>

                <div className="space-y-3">
                    {users.map((user, index) => (
                        <div
                            key={user.id}
                            className={`flex items-center justify-between p-3 rounded-lg transition-all duration-500 ease-in-out ${user.isCurrentUser ? 'bg-indigo-50 border border-indigo-200 transform scale-102' : 'bg-gray-50'
                                }`}
                        >
                            <div className="flex items-center space-x-3">
                                <div className={`font-bold text-lg w-6 ${index < 3 ? 'text-yellow-600' : 'text-gray-400'}`}>
                                    #{index + 1}
                                </div>
                                <div className={`h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${user.isCurrentUser ? 'bg-indigo-600' : 'bg-gray-400'
                                    }`}>
                                    {user.avatar}
                                </div>
                                <div>
                                    <div className={`font-semibold text-sm ${user.isCurrentUser ? 'text-indigo-900' : 'text-gray-800'}`}>
                                        {user.name}
                                    </div>
                                    <div className="text-xs text-gray-500">{user.points} pts</div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <span className="text-orange-500 mr-1">🔥</span>
                                <span className="font-bold text-gray-700 text-sm">{user.streak}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
