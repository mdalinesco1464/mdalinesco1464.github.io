---
layout: default
title: Cybersecurity Portfolio
---

<section id="Projects">
  <h2>Projects</h2>
  <p>I specialize in defensive cybersecurity, threat detection, malware analysis, mobile and web application security, and digital forensics. This portfolio showcases my tools, research, and contributions across various cybersecurity domains.</p>
</section>

<!-- Your other sections (network-security, blue-team, etc.) go here exactly as is -->
  <section id="network-security">
    <h2>🖧 Network & System Security</h2>
    <ul>
      <li><strong>Packet Sniffer</strong> — A Python-based packet capture and protocol analyzer. <a href="https://github.com/yourusername/PacketSniffer" target="_blank">GitHub</a></li>
      <li><strong>Firewall Log Analyzer</strong> — Analyze and visualize firewall logs for anomalies. <a href="https://github.com/yourusername/FirewallAnalyzer" target="_blank">GitHub</a></li>

    </ul>

<div class="code-box">
  <div class="code-actions">
    <button onclick="copyCode(this)">📋 Copy</button>
    <button onclick="editCode(this)">✏️ Edit</button>
  </div>
  <pre><code>// your code here</code></pre>
</div>
  </section>
  <section id="blue-team">
    <h2>🛡️ Blue Team & SOC</h2>
    <ul>
      <li><strong>AutoLogHunter</strong> — A Python tool to detect anomalies in Windows logs. <a href="https://github.com/yourusername/AutoLogHunter" target="_blank">GitHub</a></li>
      <li><strong>SIEM Detection Lab</strong> — Custom Splunk/ELK detection content. <a href="https://github.com/yourusername/SIEM-Detection-Lab" target="_blank">GitHub</a></li>
    </ul>
  </section>

  <section id="web-security">
    <h2>🌐 Web & API Security</h2>
    <ul>
      <li><strong>Red-Team-Toolkit</strong> — Scripts/tools for API fuzzing and auth bypass. <a href="https://github.com/yourusername/Red-Team-Toolkit" target="_blank">GitHub</a></li>
    </ul>
  </section>

  <section id="mobile-security">
    <h2>📱 Mobile Security</h2>
    <p>Static and dynamic analysis of Android apps, Smali reverse engineering, and threat modeling of mobile environments.</p>
  </section>

  <section id="re-malware">
    <h2>🧬 RE & Malware Analysis</h2>
    <ul>
      <li><strong>Malware Analysis Notes</strong> — Reverse engineering, IDA/Ghidra workflows. <a href="https://github.com/yourusername/Malware-Notes" target="_blank">GitHub</a></li>
    </ul>
    <div class="asciinema">
      <h3>📽️ Demo: Malware Analyzer in Action</h3>
      <script id="asciicast-569558" src="https://asciinema.org/a/569558.js" async></script>
    </div>
  </section>

<section id="dfir">
  <h2>🧩 DFIR & Incident Response</h2>
  <ul>
    <li><strong>Incident Timeline Generator</strong> — Parses event logs into visual timeline. <a href="https://github.com/yourusername/dfir-timeline">GitHub</a></li>
  </ul>
</section>
  <section id="labs">
    <h2>🧪Writeups & Labs</h2>
    <ul>
      <li><a href="https://github.com/yourusername/CTF-Writeups" target="_blank">CTF Writeups</a></li>
      <li><a href=https://github.com/mdalinesco1464/mdalinesco1464.github.io/blob/main/_posts/2025-06-01-log-analysis.md" target="_blank">DFIR Labs</a></li>
    </ul>
  </section>
<section id="blog">
  <h2>✍️ Blog</h2>
  <ul>
    {% for post in site.posts %}
      <li><a href="_posts/2025-06-01-log-analysis.md">{{ post.title }}</a> - <small>{{ post.date | date: "%b %d, %Y" }}</small></li>
    {% endfor %}
  </ul>
</section>

<section id="skills">
  <h2>🛠️ Skills & Tools</h2>
  <p><strong>Languages:</strong> Python, Bash, C</p>
  <p><strong>Tools:</strong> Ghidra, Wireshark, Splunk, Burp Suite</p>
  <p><strong>Concepts:</strong> Threat Hunting, Reverse Engineering, Exploit Dev</p>
</section>
  <section id="contact">
    <h2>📫 Contact</h2>
    <p>Email: younusalicmt08@gmail.com</p>
    <p>LinkedIn: <a href="http://www.linkedin.com/in/younus-ali-1b0151119" target="_blank">linkedin.com/in/younus-ali</a></p>

  <p>Resume: <a href="./resume.pdf" target="_blank">Download PDF</a></p>
  </section>
<!-- Skills, Contact, etc. -->
