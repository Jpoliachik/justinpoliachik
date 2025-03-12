import React, { useEffect, useState } from "react";

// types.ts
export interface Recommendation {
  _id: string;
  url: string;
  contentUrl?: string;
  title?: string;
  creator?: string;
  description?: string;
  imageUrl?: string;
  category: "music" | "podcast" | "video" | "article";
  metadata?: {
    platform?: string;
    duration?: number;
    publishDate?: Date;
    platformId?: string;
  };
  tags?: string[];
  addedAt: string;
  postedToBluesky?: boolean;
  notes?: string;
}

// utils/mediaHelpers.ts
export function getMediaIcon(category: string): string {
  switch (category) {
    case "podcast":
      return "🎙️";
    case "video":
      return "📺";
    case "music":
      return "🎵";
    case "article":
      return "📄";
    default:
      return "🔗";
  }
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

interface RecommendationCardProps {
  recommendation: Recommendation;
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({ recommendation }) => {
  const { url, contentUrl, title, creator, category, addedAt, notes, imageUrl } = recommendation;

  const displayTitle = title || new URL(url).hostname;
  const icon = getMediaIcon(category);
  const linkUrl = contentUrl || url;

  return (
    <div className="mb-2">
      <div className="flex">
        {imageUrl ? (
          <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="mr-3 mt-1">
            <img
              src={imageUrl}
              alt={displayTitle}
              className="w-12 h-12 object-cover rounded-lg transition-opacity hover:opacity-50"
            />
          </a>
        ) : (
          <span className="text-sm mr-2 mt-1">{icon}</span>
        )}
        <div className="flex-1 flex flex-col">
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            {displayTitle}
          </a>
          {/* {creator && <span className="text-sm text-gray-600 ml-2">{creator}</span>} */}
          {notes && <p className="text-sm text-gray-700">{notes}</p>}
          <span className="text-xs text-gray-400 mt-1">{formatDate(addedAt)}</span>
        </div>
      </div>
    </div>
  );
};

interface RecommendationsWidgetProps {
  limit?: number;
  categories?: Array<Recommendation["category"]>;
  tags?: string[];
  itemsPerCategory?: number;
}

export const RecommendationsWidget: React.FC<RecommendationsWidgetProps> = ({
  limit = 5,
  categories,
  tags,
  itemsPerCategory = 3,
}) => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [groupedRecommendations, setGroupedRecommendations] = useState<Record<string, Recommendation[]>>({});

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        // Build the API URL with query parameters
        let apiUrl = "https://stuffilike-production.up.railway.app/api/recommendations";

        // if (limit) {
        //   apiUrl += `limit=${limit}&`;
        // }

        // if (categories && categories.length > 0) {
        //   apiUrl += `categories=${categories.join(",")}&`;
        // }

        // if (tags && tags.length > 0) {
        //   apiUrl += `tags=${tags.join(",")}&`;
        // }

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch recommendations");
        }

        const data = (await response.json()) as { data: Recommendation[] };

        // Sort recommendations by date (newest first)
        const sortedRecommendations = data.data.sort(
          (a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime()
        );

        setRecommendations(sortedRecommendations);

        // Group recommendations by category
        const grouped: Record<string, Recommendation[]> = {};
        sortedRecommendations.forEach((rec) => {
          if (!grouped[rec.category]) {
            grouped[rec.category] = [];
          }
          if (grouped[rec.category].length < itemsPerCategory) {
            grouped[rec.category].push(rec);
          }
        });

        setGroupedRecommendations(grouped);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [limit, categories, tags, itemsPerCategory]);

  if (loading) {
    return (
      <div className="p-6 bg-white rounded-lg">
        <h2 className="text-xl font-serif text-gray-400">Stuff I Liked</h2>
        <div className="animate-pulse space-y-4">
          {[...Array(limit)].map((_, i) => (
            <div key={i} className="flex items-center">
              <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-white rounded-lg">
        <h2 className="text-xl font-serif text-gray-400">Stuff I Liked</h2>
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  if (recommendations.length === 0) {
    return (
      <div className="p-6 bg-white rounded-lg">
        <h2 className="text-xl font-serif text-gray-400">Stuff I Liked</h2>
        <div className="text-gray-500">No recommendations found.</div>
      </div>
    );
  }

  const categoryNames = {
    music: "Music",
    podcast: "Podcasts",
    video: "Videos",
    article: "Articles",
  };

  return (
    <div className="">
      <h2 className="text-xl font-serif text-gray-400 mb-4">Stuff I Liked</h2>
      <div className="space-y-8">
        {Object.entries(groupedRecommendations).map(([category, items]) => (
          <div key={category} className="mb-4">
            <h3 className="text-md font-semibold mb-3 border-b pb-2">
              {getMediaIcon(category)} {categoryNames[category as keyof typeof categoryNames] || category}
            </h3>
            <div className="space-y-2">
              {items.map((recommendation) => (
                <RecommendationCard key={recommendation._id} recommendation={recommendation} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
