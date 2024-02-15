// Parameters: Name, Date, Content
export default function Comment(props) {
  return (
  <article class="p-6 text-base bg-white rounded-lg">

    <footer class="flex justify-between items-center">

      <div class="flex items-center">
        <p class="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
          <img  class="mr-2 w-6 h-6 rounded-full"
          src="src/assets/profile.jpg" />
          {props.name}
        </p>
        <p class="text-sm text-gray-600">
          <time pubdate datetime="2024-02-08"title="February 8th, 2024">{props.date}</time>
        </p>
      </div>

    </footer>

    <p class="text-gray-500">
    {props.content}
    </p>

    <div class="flex items-center mt-4 space-x-4">
      <button type="button"
      class="flex items-center text-sm text-gray-500 hover:underline font-medium">
        <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
        </svg>
        Reply
      </button>
    </div>

  </article>
  )
}