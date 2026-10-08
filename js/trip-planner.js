/**
 * BharatDarshan - Client-Side Trip Planner & Budget Estimator
 * Generates transparent travel planning estimates based on Indian tourism norms.
 * No fake bookings, No server calls, 100% genuine planning tool.
 */

document.addEventListener('DOMContentLoaded', () => {
  const plannerForm = document.getElementById('tripPlannerForm');
  const resultCard = document.getElementById('plannerResultCard');

  if (!plannerForm || !resultCard) return;

  plannerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const destination = document.getElementById('plannerDestination').value;
    const days = parseInt(document.getElementById('plannerDays').value, 10) || 3;
    const travelers = parseInt(document.getElementById('plannerTravelers').value, 10) || 2;
    const style = document.getElementById('plannerStyle').value; // budget, moderate, premium

    // Cost multiplier per traveler per day (INR)
    // Budget: ~₹1,200 - ₹1,800/day (Dharmashala/guesthouse, local thalis, public transport)
    // Moderate: ~₹2,800 - ₹4,200/day (3-star hotel, AC transport, popular restaurants)
    // Premium: ~₹6,500 - ₹10,000/day (Heritage resort/4-5 star, private chauffeur, fine dining)
    let perPersonDailyMin = 1500;
    let perPersonDailyMax = 2200;
    let stayType = "Clean Budget Guesthouses & Homestays";
    let transportType = "Local autos, state transport, and standard train berths";

    if (style === 'moderate') {
      perPersonDailyMin = 3000;
      perPersonDailyMax = 4500;
      stayType = "Comfortable 3-Star Hotels & Heritage Havelis";
      transportType = "AC Cabs / Pre-booked intercity taxis & AC 3-Tier/2-Tier trains";
    } else if (style === 'premium') {
      perPersonDailyMin = 7000;
      perPersonDailyMax = 11000;
      stayType = "4/5-Star Luxury Resorts, Heritage Palaces & Boutique Stays";
      transportType = "Dedicated Chauffeur Driven Sedan/SUV & Flight connections";
    }

    const totalMin = perPersonDailyMin * days * travelers;
    const totalMax = perPersonDailyMax * days * travelers;

    const formattedMin = new Intl.NumberFormat('en-IN').format(totalMin);
    const formattedMax = new Intl.NumberFormat('en-IN').format(totalMax);

    resultCard.innerHTML = `
      <div style="border-bottom: 1px solid #fed7aa; padding-bottom: 1rem; margin-bottom: 1rem;">
        <h4 style="color: #9a3412; font-size: 1.25rem; margin-bottom: 0.35rem;">
          Trip Plan Summary: ${destination} (${days} Days • ${travelers} Traveler${travelers > 1 ? 's' : ''})
        </h4>
        <p style="color: #475569; font-size: 0.9rem; margin-bottom: 0;">
          Estimated Total Cost Range: <strong style="color: #0f172a; font-size: 1.15rem;">₹${formattedMin} – ₹${formattedMax}</strong>
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1rem; font-size: 0.88rem;">
        <div>
          <span style="display:block; color: #64748b; font-size: 0.75rem; font-weight:700; text-transform:uppercase;">Suggested Stay Style</span>
          <strong style="color: #1e293b;">${stayType}</strong>
        </div>
        <div>
          <span style="display:block; color: #64748b; font-size: 0.75rem; font-weight:700; text-transform:uppercase;">Transit Strategy</span>
          <strong style="color: #1e293b;">${transportType}</strong>
        </div>
        <div>
          <span style="display:block; color: #64748b; font-size: 0.75rem; font-weight:700; text-transform:uppercase;">Food & Sightseeing</span>
          <strong style="color: #1e293b;">Authentic regional thalis, temple prasadam, entry monuments</strong>
        </div>
      </div>

      <div style="background-color: #ffffff; border: 1px solid #fed7aa; border-radius: 6px; padding: 0.85rem; font-size: 0.82rem; color: #64748b; line-height: 1.5;">
        <strong>Informational Advisory:</strong> Actual expenses vary based on peak festive seasons, advance bookings with Indian Railways/airlines, and personal choices. BharatDarshan provides objective guidance to help you budget responsibly without hidden commission surcharges.
      </div>
    `;

    resultCard.style.display = 'block';
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
});
