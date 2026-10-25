// Contact channels. Each one renders as a link on the Contact page.
//
// Add a channel by copying one of the entries below. There is deliberately no LinkedIn entry: no URL exists yet.
// Nothing else (street address, phone numbers) is shown anywhere on the site.
//
// external: true opens the link in a new tab with a screen-reader note (profiles); false is for mailto:.

export const contact = {
  title: "Contact",
  lead: "The best way to reach me is by email. My public profiles are below.",
  channels: [
    {
      id: "email",
      label: "Email",
      value: "jhonkenth1307@gmail.com",
      href: "mailto:jhonkenth1307@gmail.com",
      external: false,
    },
    {
      id: "facebook",
      label: "Facebook",
      value: "Facebook profile",
      href: "https://www.facebook.com/profile.php?id=61590307596785",
      external: true,
    },
    {
      id: "threads",
      label: "Threads",
      value: "@kremkremmmm",
      href: "https://www.threads.com/@kremkremmmm?hl=en",
      external: true,
    },
  ],
  location: { label: "Based in", value: "Bulacan, Philippines" },
};
