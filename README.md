<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Gender Equality Awareness</title>
  <style>
    /* Reset */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #f3f0f8;
      color: #3b2a5e;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    a {
      color: #7b4da6;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
      color: #9b6ccf;
    }
    header {
      background-color: #6e55a7;
      color: white;
      padding: 1rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      box-shadow: 0 2px 8px rgba(107,79,161,0.5);
    }
    header h1 {
      font-size: 1.8rem;
      font-weight: 700;
      letter-spacing: 1px;
    }
    nav ul {
      list-style: none;
      display: flex;
      gap: 1.3rem;
      flex-wrap: wrap;
    }
    nav ul li {
      font-weight: 600;
    }
    nav ul li a {
      padding: 0.5rem 0.9rem;
      border-radius: 6px;
      transition: background-color 0.3s ease, color 0.3s ease;
      display: inline-block;
    }
    nav ul li a:hover,
    nav ul li a.active {
      background-color: #a27bca;
      color: #fff;
    }
    main {
      background: white;
      max-width: 960px;
      margin: 2rem auto 3rem;
      padding: 2rem 2.5rem;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(107,79,161,0.15);
      flex-grow: 1;
    }
    section {
      margin-bottom: 2.2rem;
    }
    h2 {
      border-bottom: 3px solid #a27bca;
      color: #6e55a7;
      margin-bottom: 1rem;
      font-weight: 700;
      text-transform: capitalize;
    }
    h3 {
      color: #7b4da6;
      margin-top: 1rem;
      margin-bottom: 0.8rem;
      font-weight: 600;
    }
    p {
      margin-bottom: 1rem;
      line-height: 1.55;
    }
    ul {
      margin-left: 1.2rem;
      margin-bottom: 1rem;
      list-style: disc;
      color: #5b4273;
    }
    ul li {
      margin-bottom: 0.5rem;
    }
    footer {
      background-color: #6e55a7;
      color: white;
      text-align: center;
      padding: 1rem 2rem;
      font-size: 0.9rem;
      box-shadow: inset 0 4px 6px rgba(0,0,0,0.15);
    }
    /* Responsive */
    @media (max-width: 650px) {
      header {
        flex-direction: column;
        text-align: center;
      }
      nav ul {
        justify-content: center;
        gap: 0.9rem;
      }
      main {
        margin: 1.5rem 1rem 2rem;
        padding: 1.5rem 1.5rem;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>Gender Equality Awareness</h1>
    <nav>
      <ul id="navMenu">
        <li><a href="#" data-page="home" class="active">Home</a></li>
        <li><a href="#" data-page="about">About Gender Equality</a></li>
        <li><a href="#" data-page="challenges">Challenges</a></li>
        <li><a href="#" data-page="help">How to Help</a></li>
        <li><a href="#" data-page="resources">Resources & Organizations</a></li>
      </ul>
    </nav>
  </header>

  <main id="contentArea">
    <!-- Content loads here dynamically -->
  </main>

  <footer>
    &copy; 2025 Gender Equality Awareness. All rights reserved.
  </footer>

  <script>
    const contentArea = document.getElementById('contentArea');
    const navLinks = document.querySelectorAll('#navMenu a');

    const pages = {
      home: `
        <section>
          <h2>Welcome to Gender Equality Awareness</h2>
          <p>Gender equality is a fundamental human right and a cornerstone of a fair and prosperous society. It means all individuals—regardless of gender—have equal rights, responsibilities, and opportunities.</p>
          <p>Together, by raising awareness and taking meaningful action, we can dismantle stereotypes, close the pay gap, and end discrimination and gender-based violence.</p>
        </section>
        <section>
          <h2>Why Gender Equality Matters</h2>
          <p>Gender equality promotes better social outcomes, economic growth, and peaceful communities by empowering everyone to reach their full potential. It is essential for sustainable development and justice.</p>
        </section>
      `,
      about: `
        <section>
          <h2>About Gender Equality</h2>
          <p>Gender equality means ensuring equal rights, responsibilities, and opportunities for people of all genders. It addresses historical inequalities and systemic biases that have limited marginalized genders' full participation in society.</p>
          <h3>Definition and History</h3>
          <p>It involves equal access to education, employment, healthcare, and leadership roles. The movement towards equality has roots in various civil rights struggles and continues to evolve globally.</p>
          <h3>Why It Matters</h3>
          <ul>
            <li>Promotes fairness and justice</li>
            <li>Improves economic outcomes for all</li>
            <li>Reduces poverty and inequality</li>
            <li>Strengthens communities and families</li>
          </ul>
        </section>
      `,
      challenges: `
        <section>
          <h2>Challenges to Achieving Gender Equality</h2>
          <p>Despite progress, many challenges still limit gender equality worldwide:</p>
          <ul>
            <li>Persistent gender pay gaps</li>
            <li>Deep-rooted stereotypes and cultural norms</li>
            <li>Widespread gender-based violence and harassment</li>
            <li>Underrepresentation in leadership and politics</li>
            <li>Unequal access to education and healthcare</li>
          </ul>
          <p>Overcoming these challenges requires collective awareness, advocacy, and systemic change.</p>
        </section>
      `,
      help: `
        <section>
          <h2>How You Can Help Promote Gender Equality</h2>
          <p>Everyone can contribute to advancing gender equality. Here are practical actions individuals and organizations can take:</p>
          <ul>
            <li>Educate yourself and others about gender issues</li>
            <li>Speak out against discrimination and stereotypes</li>
            <li>Support policies that promote equal rights</li>
            <li>Advocate for equal pay and opportunity</li>
            <li>Participate in local or global gender equality initiatives</li>
            <li>Create inclusive and safe environments in workplaces and communities</li>
          </ul>
          <p>Small steps collectively lead to meaningful societal transformation.</p>
        </section>
      `,
      resources: `
        <section>
          <h2>Resources & Organizations Supporting Gender Equality</h2>
          <p>Learn more and support these trusted organizations working globally:</p>
          <ul>
            <li><a href="https://www.unwomen.org" target="_blank" rel="noopener">UN Women</a> - Leading UN entity for gender equality and women’s empowerment.</li>
            <li><a href="https://www.eige.europa.eu" target="_blank" rel="noopener">European Institute for Gender Equality (EIGE)</a> - Research and advocacy for equality in Europe.</li>
            <li><a href="https://www.globalfundforwomen.org" target="_blank" rel="noopener">Global Fund for Women</a> - Supports women's human rights projects worldwide.</li>
            <li><a href="https://whiteribbon.org" target="_blank" rel="noopener">White Ribbon Campaign</a> - Men’s movement to end violence against women.</li>
            <li><a href="https://www.amnesty.org/en/what-we-do/discrimination/womens-rights/" target="_blank" rel="noopener">Amnesty International Women's Rights</a> - Human rights advocacy.</li>
          </ul>
        </section>
      `
    };

    function loadPage(page) {
      contentArea.innerHTML = pages[page] || "<p>Page not found.</p>";
      navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.page === page);
      });
    }

    document.getElementById('navMenu').addEventListener('click', e => {
      if (e.target.tagName === 'A') {
        e.preventDefault();
        loadPage(e.target.dataset.page);
      }
    });

    loadPage('home'); // Load home by default
  </script>
</body>
</html>
