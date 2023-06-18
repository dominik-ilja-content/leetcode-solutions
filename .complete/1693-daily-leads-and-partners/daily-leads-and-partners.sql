SELECT date_id, make_name, 
count(DISTINCT lead_id) AS unique_leads,
count(DISTINCT partner_id) AS unique_partners
FROM dailysales
GROUP BY make_name, date_id
ORDER BY make_name, date_id;
