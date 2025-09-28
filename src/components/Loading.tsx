const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-900 via-red-800 to-pink-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo qui tourne */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
        </div>

        {/* Texte de chargement */}
        <div className="text-white">
          <h2 className="text-2xl font-bold mb-2">Mohamed DAOUD</h2>
          <p className="text-orange-200 animate-pulse">
            Chargement du portfolio...
          </p>
        </div>

        {/* Barre de progression */}
        <div className="mt-6 w-64 mx-auto">
          <div className="w-full bg-white/20 rounded-full h-1">
            <div
              className="bg-gradient-to-r from-orange-400 to-pink-400 h-1 rounded-full animate-pulse"
              style={{ animation: "loadingBar 5s linear forwards" }}
            ></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes loadingBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Loading;
