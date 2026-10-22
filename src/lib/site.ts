// All copy and links for the site live in this file.
export const site = {
  name: "CentLabs Pro",
  metaTitle: "CentLabs Pro | Offline pathology and veterinary lab software",
  metaDescription:
    "Patients, reports, bills and stock on one offline Windows computer. Encrypted on the lab PC. For pathology and veterinary labs in India.",
  keywords: [
    "CentLabs Pro",
    "pathology lab software",
    "veterinary lab software",
    "offline lab software",
    "pathology reporting software",
    "lab billing software",
    "lab software India",
  ],
  downloadLabel: "Download for Windows",
  // The owner must replace this with the direct URL of the Windows installer, named like CentLabs-Pro-setup.exe.
  downloadUrl: "WINDOWS_DOWNLOAD_URL",
  whatsappLabel: "Chat on WhatsApp",
  whatsappUrl:
    "https://wa.me/917558380826?text=Hello%2C%20I%20want%20CentLabs%20Pro%20for%20my%20lab.",
  phone: "+91 75583 80826",
  email: "wecare633@gmail.com",
  developer: {
    text: "Built by Azhar Sayyed",
    label: "azharsayyed.in",
    url: "https://azharsayyed.in",
  },
  nav: [
    { label: "Features", href: "#features" },
    { label: "Capacity", href: "#capacity" },
    { label: "Your data", href: "#local" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    title: "Patients, reports and bills on one offline computer.",
    text: "CentLabs Pro runs on your lab's own Windows PC. Your daily work never needs the internet, and your data stays in an encrypted database on that machine.",
    note: "Windows installer. Daily work stays on this computer and does not need the internet.",
    facts: [
      "Works offline",
      "Encrypted data on your PC",
      "About 2.1 billion patients and 2.1 billion reports",
    ],
  },
  strip: ["Patients", "Reports and PDF", "Tests", "Billing", "Inventory", "Backup"],
  groups: [
    {
      title: "Clinical work",
      items: [
        {
          t: "Dashboard",
          d: "See reports today, open drafts, patients and commissions at a glance. Jump to recent work or add a patient or report in one click.",
        },
        {
          t: "Patients",
          d: "Human and veterinary records get an automatic code such as PAT-2026-00001. Veterinary records also keep species, breed and the owner's name and phone.",
        },
        {
          t: "Reports",
          d: "Pick the patient, referring doctor and tests, then enter results. Calculated tests fill themselves, and each result is flagged normal, low, high or abnormal against its range.",
        },
        {
          t: "Finalize, print and share",
          d: "Save a draft, then finalize and preview. Print, download a PDF, or share the PDF on WhatsApp from the lab computer; a QR code on the PDF carries the report number, patient code, name and sample date.",
        },
        {
          t: "Test catalogue",
          d: "Panels and single tests with short name, unit, reference range, price, section, formulas and fixed result choices. Add, edit or turn off tests; ranges can differ for male and female patients and by species.",
        },
        {
          t: "Doctors",
          d: "Keep each doctor's hospital, phone, email, specialty and commission as a percent or a fixed amount. See every patient and report a doctor referred.",
        },
        {
          t: "Inventory",
          d: "Track reagents, kits, consumables and controls with quantity on hand, minimum level, location and expiry. Record stock in, stock out and adjustments.",
        },
        {
          t: "Report design",
          d: "Choose the report layout, patient block, footer and invoice layout, and set the page size. Draw the letterhead in the software, upload header and footer images, or leave a blank band for pre-printed stationery.",
        },
        {
          t: "Report policies",
          d: "Write your privacy policy, terms, quality policy and conditions of reporting. Include the quality-policy page on the report PDF or leave it off.",
        },
      ],
    },
    {
      title: "Money",
      items: [
        {
          t: "Billing",
          d: "Create invoices linked to a patient and, when needed, a report. Add test panels, give a discount, record the amount paid and see unpaid, partial or paid status; preview, print or download the PDF.",
        },
        {
          t: "Commissions",
          d: "See totals by doctor for any date range, down to the report lines. Export the figures when it is time to pay.",
        },
      ],
    },
    {
      title: "The lab's own computer",
      items: [
        {
          t: "First-run setup",
          d: "Enter your license key, lab name, phone and address. Then create your unlock password and a recovery key.",
        },
        {
          t: "Unlock screen",
          d: "The app opens with your password. It locks again after idle time, on logout and when the computer locks.",
        },
        {
          t: "Settings",
          d: "Change lab details, logo, signatures, letterhead and number prefixes in one place. Choose whose signature prints, turn the veterinary license on, and change your password or recovery key.",
        },
        {
          t: "Backup",
          d: "Make a manual backup, restore one, or turn on automatic backups. Backups include the database plus your logo, letterhead and signature images.",
        },
        {
          t: "Updates",
          d: "When the computer is online, the app can download an update. It makes a backup first and installs the update on restart.",
        },
        {
          t: "Shortcuts and command palette",
          d: "Move around the app from the keyboard. Open the command palette to reach any screen quickly.",
        },
      ],
    },
  ],
  days: [
    {
      t: "Add the patient",
      d: "Enter the details and save. Or save and start the report in one step.",
    },
    {
      t: "Create the report",
      d: "Choose the tests and enter results. Flags and formulas are filled in for you.",
    },
    { t: "Finalize and send", d: "Preview, then print the report or share the PDF on WhatsApp." },
    { t: "Take payment", d: "Record what the patient paid on the invoice and print it." },
  ],
  capacity: {
    title: "How many records can it hold?",
    intro:
      "The app allows about 2.1 billion patient records and about 2.1 billion reports. The two counters are separate. The real limit is free disk space on your computer.",
    big: [
      { n: "2.1 billion", l: "patient records" },
      { n: "2.1 billion", l: "reports" },
    ],
    sizes: [
      { n: "70,000", l: "reports fit in 1 GB" },
      { n: "700,000", l: "reports fit in 10 GB" },
      { n: "7 million", l: "reports fit in 100 GB" },
    ],
    points: [
      "One report, with its results and invoice, takes roughly 10–20 KB.",
      "A lab making 100 reports a day can keep more than 20 years of work in under 10 GB.",
      "A normal lab never reaches 2.1 billion.",
      "The number does not restart every January. The year in a code is only the year the record was created. After 99999 the code simply gets longer, for example PAT-2026-100000.",
      "Old patients and reports stay until someone deletes them.",
    ],
    warning:
      "Each backup is a full extra copy, so backups use disk space too. Copy a backup onto a USB drive or another disk, so a dead computer does not wipe your lab's history.",
  },
  local: {
    title: "What stays on your computer",
    items: [
      {
        t: "Offline daily work",
        d: "Patients, reports, bills and stock all work with no internet.",
      },
      {
        t: "Encrypted database",
        d: "Patient, report, invoice and stock data sit in an encrypted database on this PC.",
      },
      {
        t: "Password and recovery key",
        d: "You set an unlock password and a recovery key during setup.",
      },
      {
        t: "Backups on that disk",
        d: "Backups are saved on the same computer unless you copy them to a USB drive or another disk. The app can keep the last 7, 14 or 30 automatic backups, 20 manual backups and 3 taken before an update.",
      },
    ],
    honest:
      "One lab per computer. There is no phone app, no cloud account and no login from another branch.",
  },
  band: {
    title: "Ready to try it in your lab?",
    text: "Download the installer, or message us first.",
  },
  contact: { title: "Contact", text: "Message us for a demo or for help installing it." },
  vetNote: "Veterinary workflows are included when your license enables them.",
};
