import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { toast } from "sonner";

const EditModal = ({ club, isOpen, closeModal }) => {
  if (!isOpen) return null;

  const API_ENDPOINT = "http://localhost:3000/created%20clubs";

  const handleSubmit = (e) => {
    console.log("submit fired");

    e.preventDefault();

    const formData = new FormData(e.target);
    const updates = Object.fromEntries(formData.entries());
    updates.budget = Number(updates.budget) || 0;

    axios
      .patch(`${API_ENDPOINT}/${club.id}`, updates)
      .then(({ data }) => {
        console.log(data);

        toast.success("Club edited succesfully");
        closeModal();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-surface border border-line rounded-lg p-4 sm:p-6">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
          <h2 className="text-lg sm:text-xl uppercase tracking-wider">
            Edit club
          </h2>
          <button
            onClick={closeModal}
            className="p-1.5 rounded-md hover:bg-zinc-700 transition-colors text-secondary"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm border-muted mb-1.5">
                Club name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={club?.name}
                placeholder="FC Real Madrid"
                className="w-full border border-line rounded-lg px-3 py-2 text-sm bg-base focus:outline-none focus:border-[#20D99A] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm border-muted mb-1.5">
                Logo URL
              </label>
              <input
                type="url"
                name="logo"
                defaultValue={club?.logo}
                placeholder="https://example.com/logo.png"
                className="w-full border border-line rounded-lg px-3 py-2 text-sm bg-base focus:outline-none focus:border-[#20D99A] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm border-muted mb-1.5">
                Stadium
              </label>
              <input
                type="text"
                name="stadium"
                defaultValue={club?.stadium}
                placeholder="Camp Nou"
                className="w-full border border-line rounded-lg px-3 py-2 text-sm bg-base focus:outline-none focus:border-[#20D99A] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm border-muted mb-1.5">
                League
              </label>
              <input
                type="text"
                name="league"
                defaultValue={club?.league}
                placeholder="EPL"
                className="w-full border border-line rounded-lg px-3 py-2 text-sm bg-base focus:outline-none focus:border-[#20D99A] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm border-muted mb-1.5">
                Budget ($)
              </label>
              <input
                type="number"
                name="budget"
                defaultValue={club?.budget}
                placeholder="150000000"
                className="w-full border border-line rounded-lg px-3 py-2 text-sm bg-base focus:outline-none focus:border-[#20D99A] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm border-muted mb-1.5">
                Head Coach
              </label>
              <input
                type="text"
                name="coach"
                defaultValue={club?.coach}
                placeholder="Jose Mourinho"
                className="w-full border border-line rounded-lg px-3 py-2 text-sm bg-base focus:outline-none focus:border-[#20D99A] transition-colors"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm border-muted mb-1.5">
                Team formation
              </label>
              <select
                name="formation"
                defaultValue={club?.formation}
                className="w-full sm:w-1/2 border border-line rounded-lg px-3 py-2 text-sm bg-base focus:outline-none focus:border-[#20D99A] transition-colors"
              >
                <option value="4-4-2">4-4-2</option>
                <option value="4-3-3">4-3-3</option>
                <option value="5-3-1">5-3-1</option>
                <option value="3-4-3">3-4-3</option>
                <option value="3-5-1">3-5-1</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-zinc-800">
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 bg-[#20D99A] hover:bg-[#1ab881] text-[#0e121b] font-semibold rounded-lg py-3 transition-colors"
            >
              <FontAwesomeIcon icon={faFloppyDisk} />
              Save changes
            </button>
            <button
              onClick={closeModal}
              type="button"
              className="flex-1 flex items-center justify-center gap-2 border border-line hover:bg-zinc-800 text-primary text-sm font-medium rounded-lg py-3 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
