
---
layout: post
title: "🧪 Log Analysis - June 01, 2025"
date: 2025-06-01
author: "Younus"
categories: [writeups, labs]
tags: [log-analysis, linux, security, ELK, terminal, forensics]
description: "Step-by-step log analysis walkthrough with screenshots, tools used, and key findings from a real-world Linux-based forensic investigation."
---

## Objectives
- Understand the fundamentals of log analysis for security monitoring.
- Identify and investigate suspicious activities using Linux logs.
- Apply filtering and correlation techniques to uncover incidents.
- Document findings and recommend mitigation steps.

---

## Tools Used
- **Linux Terminal** (`grep`, `awk`, `sed`)
- **ELK Stack** (Elasticsearch, Logstash, Kibana)
- **fail2ban**
- **Custom Scripts**
- **Sample Logs** (`.log`, `.mp4` for session recordings, images in `assets/`)

---

## 🧪 Lab Setup
- **Environment:** Ubuntu 22.04 VM
- **Logs Location:** `./assets/logs/`
- **Configuration Files:** `./assets/fail2ban.conf`
- **Sample Video:** `./assets/session_review.mp4`
- **Terminal Screenshot:**  
    ![Terminal Log Analysis](../assets/terminal_log_analysis.png)

---



## 🔍 Investigation Steps

### 1️⃣ Initial Log Dump
Extract all authentication logs:
```bash
cat ../assets/logs/auth.log > ../assets/logs/auth_dump.log
```
📌 **Result:** Authentication logs successfully extracted for analysis.

---

### 2️⃣ Filter Failed Login Attempts
Identify failed SSH logins:
```bash
grep "Failed password" ../assets/logs/auth_dump.log
```
📌 **Detected:** Numerous failed SSH login attempts, indicating possible brute-force activity.

---

### 3️⃣ Identify Root Access Attempts
Check for unauthorized root login attempts:
```bash
grep "root" ../assets/logs/auth_dump.log | grep "authentication failure"
```
📌 **Detected:** Multiple unauthorized attempts targeting root login. No successful root access observed.

---

### 4️⃣ Timeline Analysis
Sort events by timestamp for correlation:
```bash
awk '{print $1, $2, $3, $6, $9}' ../assets/logs/auth_dump.log | sort
```
📌 **Result:** Events chronologically ordered, revealing clusters of suspicious activity during off-hours.

---

## 📊 Key Findings
- Multiple failed SSH login attempts from suspicious IPs.
- Several unauthorized root access attempts detected.
- No successful unauthorized root access.
- fail2ban actively blocked repeated offenders.

---

## ✅ Mitigation Steps
- Harden SSH configuration (disable root login, use key-based auth).
- Update and tune `fail2ban` rules.
- Regularly review and archive logs.
- Implement alerting for anomalous login patterns.

---

## 📁 Resources

- 📄 [Download Raw Logs](../assets/logs/auth_dump.log)
- ⚙️ [fail2ban.conf](../assets/fail2ban.conf)
- 📘 [Log Analysis Guide](https://www.elastic.co/guide/en/siem/guide/current/index.html)
- ![Terminal Log Analysis](../assets/terminal_log_analysis.png)
- 🎥 [Session Review Video](../assets/session_review.mp4)

---

**Tags:** #log-analysis, #linux, #forensics, #cybersecurity, #terminal, #elk-stack