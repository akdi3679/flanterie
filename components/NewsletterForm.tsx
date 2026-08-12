"use client";

export default function NewsletterForm() {
  return (
    <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
      <label className="sr-only" htmlFor="email">Votre email</label>
      <input 
        id="email" 
        type="email" 
        required 
        placeholder="votre@email.fr" 
        className="w-full flex-1 rounded-full border border-ink/20 bg-milk px-6 py-4 text-ink outline-none transition-colors placeholder:text-taupe focus:border-blue-deep" 
      />
      <button type="submit" className="btn btn-primary shrink-0">Je veux découvrir</button>
    </form>
  );
}