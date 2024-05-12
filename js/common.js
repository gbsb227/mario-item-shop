const supabaseUrl = "https://jeamgdxazxtnavkpsoxt.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplYW1nZHhhenh0bmF2a3Bzb3h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3MjUzNzQsImV4cCI6MjAzMDMwMTM3NH0.PyKgRVRPO7Sk1053CYUHws7cvcRwQ_cU9kPDxOwCRU4";

const supabaseCon = supabase.createClient(supabaseUrl, supabaseKey);

const menuButton = document.querySelector(".menu-list-button");

const subMenu = document.querySelector(".sub-menu-wrap");

menuButton.addEventListener("click", (e) => {
  console.log(subMenu.classNames);
  subMenu.classList.toggle("hidden");
});
