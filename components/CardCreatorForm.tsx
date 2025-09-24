import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";
import type { CardData, MoveType, BackgroundColor } from "../types/card";
import { cn } from "../lib/utils";

interface CardCreatorFormProps {
  onUpdate: (data: CardData) => void;
  initialData: CardData;
}

const moveTypes: MoveType[] = [
  "nature",
  "fire",
  "psychic",
  "water",
  "electric",
  "cosmic",
  "toxic",
  "dream",
  "crystal",
  "sound",
  "strength",
];

const backgroundColors: BackgroundColor[] = [
  "indigo",
  "purple",
  "green",
  "blue",
  "red",
  "yellow",
  "pink",
  "orange",
  "teal",
  "cyan",
];

const CardCreatorForm: React.FC<CardCreatorFormProps> = ({ onUpdate, initialData }) => {
  const { register, control, watch, handleSubmit } = useForm<CardData>({
    defaultValues: {
      ...initialData,
      // Ensure backgroundColor is always an array for gradient
      backgroundColor: Array.isArray(initialData.backgroundColor)
        ? initialData.backgroundColor
        : [initialData.backgroundColor as BackgroundColor, initialData.backgroundColor as BackgroundColor],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "moves",
  });

  // Watch all form values for real-time updates
  const watchedValues = watch();
  React.useEffect(() => {
    onUpdate(watchedValues);
  }, [watchedValues, onUpdate]);

  // Watch specific fields for character counting
  const nameValue = watch("name") || "";
  const taglineValue = watch("tagline") || "";

  return (
    <div className="space-y-6">
      {/* Basic Fields */}
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm font-medium">Name</label>
            <span className="text-xs text-gray-500">{nameValue.length}/30</span>
          </div>
          <input
            {...register("name")}
            type="text"
            maxLength={34}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter card name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">HP</label>
          <input
            {...register("hp")}
            type="text"
            maxLength={8}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="100"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm font-medium">Tagline</label>
            <span className="text-xs text-gray-500">{taglineValue.length}/80</span>
          </div>
          <input
            {...register("tagline")}
            type="text"
            maxLength={80}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter tagline"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            {...register("image")}
            type="url"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="https://example.com/image.jpg"
          />
        </div>
      </div>

      {/* Background Gradient */}
      <div>
        <label className="block text-sm font-medium mb-2">Background Gradient</label>
        <div className="flex gap-2">
          <Controller
            name="backgroundColor.0"
            control={control}
            render={({ field }) => (
              <select {...field} className="flex-1 px-3 py-2 border rounded-md">
                {backgroundColors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            )}
          />
          <Controller
            name="backgroundColor.1"
            control={control}
            render={({ field }) => (
              <select {...field} className="flex-1 px-3 py-2 border rounded-md">
                {backgroundColors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            )}
          />
        </div>
      </div>

      {/* Moves */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium">Moves</label>
          {fields.length < 2 && (
            <button
              type="button"
              onClick={() =>
                append({
                  title: "",
                  description: "",
                  damage: "50",
                  iconCount: 2,
                  type: "nature",
                })
              }
              className="flex items-center gap-1 px-2 py-1 text-sm bg-blue-500 text-white rounded"
            >
              <Plus size={16} />
              Add Move
            </button>
          )}
        </div>

        <div className="space-y-3">
          {fields.map((field, index) => {
            const moveTitle = watch(`moves.${index}.title`) || "";
            const moveDescription = watch(`moves.${index}.description`) || "";

            return (
              <div key={field.id} className="p-3 border rounded-md space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Move {index + 1}</span>
                  {fields.length > 1 && (
                    <button type="button" onClick={() => remove(index)} className="text-red-500 hover:text-red-700">
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-medium">Move Name</label>
                    <span className="text-xs text-gray-500">{moveTitle.length}/40</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      {...register(`moves.${index}.title`)}
                      maxLength={40}
                      placeholder="Enter move name"
                      className="px-2 py-1 border rounded text-sm"
                    />
                    <select {...register(`moves.${index}.type`)} className="px-2 py-1 border rounded text-sm">
                      {moveTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-medium">Move Description</label>
                    <span className="text-xs text-gray-500">{moveDescription.length}/90</span>
                  </div>
                  <textarea
                    {...register(`moves.${index}.description`)}
                    maxLength={90}
                    placeholder="Describe what this move does"
                    className="w-full px-2 py-1 border rounded text-sm h-20 resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-xs font-medium">Damage</label>
                    <input
                      {...register(`moves.${index}.damage`)}
                      type="text"
                      maxLength={8}
                      className="w-full px-2 py-1 border rounded text-sm"
                      placeholder="50"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium">Icon Count (1-4)</label>
                    <input
                      {...register(`moves.${index}.iconCount`, { valueAsNumber: true })}
                      type="number"
                      min="1"
                      max="4"
                      className="w-full px-2 py-1 border rounded text-sm"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardCreatorForm;
