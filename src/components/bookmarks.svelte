<script lang="ts">
  import { bookmarks, addBookmark, editBookmark, deleteBookmark, type Bookmark } from '../lib/stores/bookmarkStore';
  // No need to import writable or onMount for this part as $bookmarks auto-subscription and store logic suffice

  // For Add New Bookmark form
  let newTitle: string = '';
  let newUrl: string = '';

  // For Edit Bookmark form
  let editingBookmarkId: string | null = null;
  let editTitle: string = '';
  let editUrl: string = '';

  function handleAddBookmark() {
    if (newTitle.trim() && newUrl.trim()) {
      addBookmark(newTitle.trim(), newUrl.trim());
      newTitle = '';
      newUrl = '';
    } else {
      alert('Please provide both title and URL.');
    }
  }

  function startEdit(bookmark: Bookmark) {
    editingBookmarkId = bookmark.id;
    editTitle = bookmark.title;
    editUrl = bookmark.url;
  }

  function handleEditBookmark() {
    if (editingBookmarkId && editTitle.trim() && editUrl.trim()) {
      editBookmark(editingBookmarkId, { title: editTitle.trim(), url: editUrl.trim() });
      cancelEdit();
    } else {
      alert('Please provide both title and URL for editing.');
    }
  }

  function cancelEdit() {
    editingBookmarkId = null;
    editTitle = '';
    editUrl = '';
  }

  function handleDeleteBookmark(id: string) {
    if (confirm('Are you sure you want to delete this bookmark?')) {
      deleteBookmark(id);
    }
  }

  // Helper to get icon path
  function getIconPath(icon?: string): string {
    if (!icon) return '/img/default-icon.svg'; // Path to a generic default icon
    // Simple check if it's a full URL vs. a local file path
    if (icon.startsWith('http://') || icon.startsWith('https://') || icon.startsWith('data:')) {
      return icon;
    }
    return `/img/${icon}`;
  }
</script>

<section class="w-full p-4 md:p-6 bg-gray-900 text-gray-100 min-h-screen">
  <!-- Add New Bookmark Form -->
  <div class="mb-8 p-4 md:p-6 bg-gray-800 rounded-lg shadow-xl mx-auto max-w-2xl">
    <h2 class="text-2xl font-semibold mb-4 text-center text-purple-400">Add New Bookmark</h2>
    <form on:submit|preventDefault={handleAddBookmark} class="space-y-4">
      <div>
        <label for="newTitle" class="block text-sm font-medium text-gray-300 mb-1">Title:</label>
        <input type="text" id="newTitle" bind:value={newTitle} class="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-gray-100" placeholder="e.g., My Favorite Site">
      </div>
      <div>
        <label for="newUrl" class="block text-sm font-medium text-gray-300 mb-1">URL:</label>
        <input type="url" id="newUrl" bind:value={newUrl} class="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-gray-100" placeholder="e.g., https://example.com">
      </div>
      <button type="submit" class="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors">Add Bookmark</button>
    </form>
  </div>

  <!-- Edit Bookmark Form (Modal-like appearance) -->
  {#if editingBookmarkId}
    <div class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div class="bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full">
        <h2 class="text-2xl font-semibold mb-4 text-purple-400">Edit Bookmark</h2>
        <form on:submit|preventDefault={handleEditBookmark} class="space-y-4">
          <div>
            <label for="editTitle" class="block text-sm font-medium text-gray-300 mb-1">Title:</label>
            <input type="text" id="editTitle" bind:value={editTitle} class="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-gray-100">
          </div>
          <div>
            <label for="editUrl" class="block text-sm font-medium text-gray-300 mb-1">URL:</label>
            <input type="url" id="editUrl" bind:value={editUrl} class="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-gray-100">
          </div>
          <div class="flex justify-end space-x-3">
            <button type="button" on:click={cancelEdit} class="px-4 py-2 bg-gray-600 text-gray-200 rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors">Cancel</button>
            <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  {/if}

  <!-- Bookmarks List -->
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold mb-6 text-center text-purple-300">My Bookmarks</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
      {#each $bookmarks as bookmark (bookmark.id)}
        <div class="bg-gray-800 rounded-lg p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between">
          <a href={bookmark.url} target="_blank" rel="noopener noreferrer" class="block mb-3 hover:opacity-80 transition-opacity">
            <div class="flex items-center">
              <img class="w-8 h-8 mr-3 object-contain flex-shrink-0" src={getIconPath(bookmark.icon)} alt="{bookmark.title} icon" width="32" height="32"/>
              <span class="font-semibold text-purple-300 truncate group-hover:text-purple-200" title={bookmark.title}>
                {bookmark.title}
              </span>
            </div>
          </a>
          <div class="mt-auto pt-2 border-t border-gray-700">
            {#if bookmark.isUserDefined !== false}
              <div class="flex justify-end space-x-2">
                <button on:click={() => startEdit(bookmark)} class="text-xs px-3 py-1 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transition-colors">Edit</button>
                <button on:click={() => handleDeleteBookmark(bookmark.id)} class="text-xs px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors">Delete</button>
              </div>
            {:else}
              <span class="text-xs text-gray-500 italic">(Default)</span>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>