<template>
<!-- component -->
<form class=" pb-5 bg-black w-full max-w">
  <div class="pt-28 flex flex-wrap mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
        Nickname
      </label>
      <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nick" type="text">
    </div>
  </div>
  <div class="flex flex-wrap mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
        E-mail
      </label>
      <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email">
    </div>
  </div>
  <div class="flex flex-wrap mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
        Message
      </label>
      <textarea class=" no-resize appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
    </div>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3">
      <button class="shadow bg-blue  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Send
      </button>
    </div>
    <div class="md:w-2/3"></div>
  </div>
</form>

<div>
  <hr class="w-full">
</div>
</template>