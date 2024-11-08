// Questions Data Structure
const questions = [
    {
        question: "Which characteristic of Cloud Computing imparts the ability to acquire resources as you need and release when you no longer need them?",
        options: ["Reliability", "Resiliency", "Durability", "Elasticity"],
        answer: ["Elasticity"],
        type: "single"
    },
    {
        question: "Which of the following AWS services comes under the Software as a Service (SaaS) Cloud Computing Type?",
        options: ["Elastic Load Balancing (ELB)", "Amazon Elastic Compute Cloud (Amazon EC2)", "Amazon Rekognition", "AWS Elastic Beanstalk"],
        answer: ["Amazon Rekognition"],
        type: "single"
    },
    {
        question: "Which service gives a personalized view of the status of the AWS services that are part of your Cloud architecture so that you can quickly assess the impact on your business when AWS service(s) are experiencing issues?",
        options: ["AWS Health - Service Health Dashboard", "Amazon Inspector", "AWS Health - Your Account Health Dashboard", "Amazon CloudWatch"],
        answer: ["AWS Health - Your Account Health Dashboard"],
        type: "single"
    },
    {
        question: "Which AWS technology/service helps you to scale your resources to match supply with demand while still keeping your cloud solution cost-effective?",
        options: ["AWS Cost Explorer", "AWS OpsWorks", "AWS Auto Scaling", "AWS CloudFormation"],
        answer: ["AWS Auto Scaling"],
        type: "single"
    },
    {
        question: "The AWS Cloud Adoption Framework (AWS CAF) recommends four iterative and incremental cloud transformation phases. Which cloud transformation journey phase of the AWS Cloud Adoption Framework (AWS CAF) focuses on demonstrating how the cloud will help accelerate your business outcomes?",
        options: ["Align", "Envision", "Scale", "Launch"],
        answer: ["Envision"],
        type: "single"
    },
    {
        question: "Which of the following AWS services are always free to use (Select two)?",
        options: ["Amazon DynamoDB", "Amazon Elastic Compute Cloud (Amazon EC2)", "AWS Auto Scaling", "AWS Identity and Access Management (AWS IAM)", "Amazon Simple Storage Service (Amazon S3)"],
        answer: ["AWS Auto Scaling", "AWS Identity and Access Management (AWS IAM)"],
        type: "multiple"
    },
    {
        question: "Which AWS service publishes up-to-the-minute information on the general status and availability of all AWS services in all the Regions of AWS Cloud?",
        options: ["AWS CloudFormation", "Amazon CloudWatch", "AWS Health Dashboard - service health", "AWS Health Dashboard – Your account health"],
        answer: ["AWS Health Dashboard - service health"],
        type: "single"
    },
    {
        question: "The AWS Well-Architected Framework provides guidance on building cloud based applications using AWS best practices. Which of the following options are the pillars mentioned in the AWS Well-Architected Framework? (Select two)",
        options: ["Cost Optimization", "Reliability", "Availability", "Elasticity", "Scalability"],
        answer: ["Cost Optimization", "Reliability"],
        type: "multiple"
    },
    {
        question: "An organization deploys its IT infrastructure in a combination of its on-premises data center along with AWS Cloud. How would you categorize this deployment model?",
        options: ["Mixed deployment", "Cloud deployment", "Hybrid deployment", "Private deployment"],
        answer: ["Hybrid deployment"],
        type: "single"
    },
    {
        question: "Which of the following AWS services is essential for implementing security of resources in AWS Cloud?",
        options: ["AWS Web Application Firewall (AWS WAF)", "Amazon CloudWatch", "AWS Shield", "AWS Identity and Access Management (IAM)"],
        answer: ["AWS Identity and Access Management (IAM)"],
        type: "single"
    },
    {
        question: "Which policy describes prohibited uses of the web services offered by Amazon Web Services?",
        options: ["AWS Applicable Use Policy", "AWS Fair Use Policy", "AWS Trusted Advisor", "AWS Acceptable Use Policy"],
        answer: ["AWS Acceptable Use Policy"],
        type: "single"
    },
    {
        question: "Multi-AZ deployment is an example of which of the following?",
        options: ["Scale out", "Scale up", "Performance Efficiency", "High Availability"],
        answer: ["High Availability"],
        type: "single"
    },
    {
        question: "Which tool will help you review your workloads against current AWS best practices for cost optimization, security, and performance improvement and then obtain advice to architect them better?",
        options: ["Amazon Inspector", "AWS Cost Explorer", "Amazon CloudWatch", "AWS Trusted Advisor"],
        answer: ["AWS Trusted Advisor"],
        type: "single"
    },
    {
        question: "Which of the following are examples of Horizontal Scalability (aka Elasticity)? (Select two)",
        options: ["Read Replicas in Amazon Relational Database Service (Amazon RDS)", "Modify an EC2 instance type from t2.nano to u-12tb1.metal", "Modify a Database instance to higher CPU and RAM", "Elastic Load Balancing (ELB)", "Add a bigger CPU to a computer"],
        answer: ["Elastic Load Balancing (ELB)", "Read Replicas in Amazon Relational Database Service (Amazon RDS)"],
        type: "multiple"
    },
    {
        question: "Which of the following AWS services allows a database to have flexible schema and supports document data models?",
        options: ["Amazon DynamoDB", "Amazon Aurora", "Amazon Relational Database Service (Amazon RDS)", "Amazon Redshift"],
        answer: ["Amazon DynamoDB"],
        type: "single"
    },
    {
        question: "Which of the following statements is INCORRECT about AWS Auto Scaling?",
        options: ["You can automatically remove unhealthy instances", "You can automatically deploy AWS Shield when a DDoS attack is detected", "You can scale out and add more Amazon Elastic Compute Cloud (Amazon EC2) instances to match an increase in demand as well as scale in and remove Amazon Elastic Compute Cloud (Amazon EC2) instances to match a reduced demand", "You can automatically register new instances to a load balancer"],
        answer: ["You can automatically deploy AWS Shield when a DDoS attack is detected"],
        type: "single"
    },
    {
        question: "Which AWS service enables users to find, buy, and immediately start using software solutions in their AWS environment?",
        options: ["AWS OpsWorks", "AWS Config", "AWS Marketplace", "AWS Systems Manager"],
        answer: ["AWS Marketplace"],
        type: "single"
    },
    {
        question: "Which of the following is the correct statement regarding the AWS Storage services?",
        options: ["Amazon Simple Storage Service (Amazon S3) is file based storage, Amazon Elastic Block Store (Amazon EBS) is block based storage and Amazon Elastic File System (Amazon EFS) is object based storage", "Amazon Simple Storage Service (Amazon S3) is block based storage, Amazon Elastic Block Store (Amazon EBS) is object based storage and Amazon Elastic File System (Amazon EFS) is file based storage", "Amazon Simple Storage Service (Amazon S3) is object based storage, Amazon Elastic Block Store (Amazon EBS) is file based storage and Amazon Elastic File System (Amazon EFS) is block based storage", "Amazon Simple Storage Service (Amazon S3) is object based storage, Amazon Elastic Block Store (Amazon EBS) is block based storage and Amazon Elastic File System (Amazon EFS) is file based storage"],
        answer: ["Amazon Simple Storage Service (Amazon S3) is object based storage, Amazon Elastic Block Store (Amazon EBS) is block based storage and Amazon Elastic File System (Amazon EFS) is file based storage"],
        type: "single"
    },
    {
        question: "A customer has created a VPC and a subnet within AWS Cloud. Which of the following statements is correct?",
        options: ["A subnet spans all of the Availability Zones (AZ) in the Region whereas an Amazon Virtual Private Cloud (Amazon VPC) spans only one Availability Zone (AZ) in the Region", "Both the Amazon Virtual Private Cloud (Amazon VPC) and the subnet span only one Availability Zone (AZ) in the Region", "Both the Amazon Virtual Private Cloud (Amazon VPC) and the subnet span all of the Availability Zones (AZ) in the Region", "An Amazon Virtual Private Cloud (Amazon VPC) spans all of the Availability Zones (AZ) in the Region whereas a subnet spans only one Availability Zone (AZ) in the Region"],
        answer: ["An Amazon Virtual Private Cloud (Amazon VPC) spans all of the Availability Zones (AZ) in the Region whereas a subnet spans only one Availability Zone (AZ) in the Region"],
        type: "multiple"
    },
    {
        question: "An online gaming company wants to block users from certain geographies from accessing its content. Which AWS service can be used to accomplish this task?",
        options: ["AWS Shield", "Security group", "Amazon CloudWatch", "AWS Web Application Firewall (AWS WAF)"],
        answer: ["AWS Web Application Firewall (AWS WAF)"],
        type: "multiple"
    },
    {
        question: "Which of the following statement is correct for a Security Group and a Network Access Control List (Network ACL)?",
        options: ["Security Group acts as a firewall at the instance level whereas Network Access Control List (Network ACL) acts as a firewall at the subnet level", "Security Group acts as a firewall at the Availability Zone (AZ) level whereas Network Access Control List (Network ACL) acts as a firewall at the VPC level", "Security Group acts as a firewall at the subnet level whereas Network Access Control List (Network ACL) acts as a firewall at the instance level", "Security Group acts as a firewall at the VPC level whereas Network Access Control List (Network ACL) acts as a firewall at the Availability Zone (AZ) level"],
        answer: ["Security Group acts as a firewall at the instance level whereas Network Access Control List (Network ACL) acts as a firewall at the subnet level"],
        type: "single"
    },
    {
        question: "Which AWS service should be used when you want to run container applications, but want to avoid the operational overhead of scaling, patching, securing, and managing servers?",
        options: ["Amazon Elastic Container Service (Amazon ECS) - Fargate launch type", "Amazon Elastic Compute Cloud (Amazon EC2)", "AWS Lambda", "Amazon Elastic Container Service (Amazon ECS) - EC2 launch type"],
        answer: ["Amazon Elastic Container Service (Amazon ECS) - Fargate launch type"],
        type: "multiple"
    },
    {
        question: "Which of the following options can be used to access and manage all AWS services (Select three)?",
        options: ["AWS Management Console", "Amazon API Gateway", "AWS Secrets Manager", "AWS Command Line Interface (AWS CLI)", "AWS Software Development Kit (SDK)", "AWS Systems Manager"],
        answer: ["AWS Management Console", "AWS Command Line Interface (AWS CLI)", "AWS Software Development Kit (SDK)"],
        type: "multiple"
    },
    {
        question: "Which of the following use-cases is NOT supported by Amazon Rekognition?",
        options: ["Label objects in a photo", "Quickly resize photos to create thumbnails", "Identify person in a photo", "Detect text in a photo"],
        answer: ["Quickly resize photos to create thumbnails"],
        type: "single"
    },
    {
        question: "A company wants a fully managed, flexible, and scalable file storage system, with low latency access, for its Windows-based applications. Which AWS service is the right choice for the company?",
        options: ["Amazon FSx for Windows File Server", "Amazon Elastic Block Storage (Amazon EBS)", "Amazon Elastic File System (Amazon EFS)", "Amazon FSx for Lustre"],
        answer: ["Amazon FSx for Windows File Server"],
        type: "single"
    },
    {
        question: "Which AWS service can be used to store, manage, and deploy Docker container images?",
        options: ["Amazon Elastic Compute Cloud (Amazon EC2)", "AWS Lambda", "Amazon Elastic Container Service (Amazon ECS)", "Amazon Elastic Container Registry (Amazon ECR)"],
        answer: ["Amazon Elastic Container Registry (Amazon ECR)"],
        type: "single"
    },
    {
        question: "A gaming company is looking at a technology/service that can deliver a consistent low-latency gameplay to ensure a great user experience for end-users in various locations. Which AWS technology/service will provide the necessary low-latency access to the end-users?",
        options: ["AWS Wavelength", "AWS Edge Locations", "AWS Direct Connect", "AWS Local Zones"],
        answer: ["AWS Local Zones"],
        type: "single"
    },
    {
        question: "What are the fundamental drivers of cost with AWS Cloud?",
        options: ["Compute, Databases and Outbound Data Transfer", "Compute, Storage and Inbound Data Transfer", "Compute, Storage and Outbound Data Transfer", "Compute, Databases and Inbound Data Transfer"],
        answer: ["Compute, Storage and Outbound Data Transfer"],
        type: "multiple"
    },
    {
        question: "Which AWS compute service provides the EASIEST way to access resizable compute capacity in the cloud with support for per-second billing and access to the underlying OS?",
        options: ["Amazon Lightsail", "AWS Lambda", "Amazon Elastic Container Service (Amazon ECS)", "Amazon Elastic Compute Cloud (Amazon EC2)"],
        answer: ["Amazon Elastic Compute Cloud (Amazon EC2)"],
        type: "multiple"
    },
    {
        question: "A fleet of Amazon EC2 instances spread across different Availability Zones (AZ) needs to access, edit and share file-based data stored centrally on a system. As a Cloud Practitioner, which AWS service would you recommend for this use-case?",
        options: ["Amazon Simple Storage Service (Amazon S3)", "Amazon Elastic Block Store (Amazon EBS)", "EC2 Instance Store", "Amazon Elastic File System (Amazon EFS)"],
        answer: ["Amazon Elastic File System (Amazon EFS)"],
        type: "single"
    },
    {
        question: "Which AWS service helps with global application availability and performance using the AWS global network?",
        options: ["AWS Global Accelerator", "Amazon CloudFront", "Amazon Route 53", "Elastic Load Balancing (ELB)"],
        answer: ["AWS Global Accelerator"],
        type: "single"
    },
    {
        question: "An e-commerce company wants to store data from a recommendation engine in a database. As a Cloud Practioner, which AWS service would you recommend to provide this functionality with the LEAST operational overhead for any scale?",
        options: ["Amazon DynamoDB", "Amazon Neptune", "Amazon Relational Database Service (Amazon RDS)", "Amazon Simple Storage Service (Amazon S3)"],
        answer: ["Amazon DynamoDB"],
        type: "single"
    },
    {
        question: "A company's flagship application runs on a fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances. As per the new policies, the system administrators are looking for the best way to provide secure shell access to Amazon Elastic Compute Cloud (Amazon EC2) instances without opening new ports or using public IP addresses. Which tool/service will help you achieve this requirement?",
        options: ["Amazon Inspector", "AWS Systems Manager Session Manager", "Amazon Elastic Compute Cloud (Amazon EC2) Instance Connect", "Amazon Route 53"],
        answer: ["AWS Systems Manager Session Manager"],
        type: "single"
    },
    {
        question: "Which of the following statements are true about AWS Lambda? (Select two)",
        options: ["You pay for the compute time you consume for AWS Lambda", "AWS Lambda allows you to orchestrate and manage Docker containers to facilitate complex containerized applications on AWS", "AWS Lambda lets you run code without provisioning or managing servers", "AWS Lambda allows you to install databases on the underlying serverless Operating System", "AWS Lambda provides access to the underlying operating system to control its behavior through code"],
        answer: ["You pay for the compute time you consume for AWS Lambda", "AWS Lambda lets you run code without provisioning or managing servers"],
        type: "multiple"
    },
    {
        question: "What are the different gateway types supported by AWS Storage Gateway service?",
        options: ["Object Gateway, File Gateway and Block Gateway", "Tape Gateway, File Gateway and Volume Gateway", "Tape Gateway, Object Gateway and Volume Gateway", "Tape Gateway, File Gateway and Block Gateway"],
        answer: ["Tape Gateway, File Gateway and Volume Gateway"],
        type: "single"
    },
    {
        question: "A company is using a message broker service on its on-premises application and wants to move this messaging functionality to AWS Cloud. Which of the following AWS services is the right choice to move the existing functionality easily?",
        options: ["Amazon Simple Queue Service (Amazon SQS)", "Amazon MQ", "Amazon Simple Notification Service (Amazon SNS)", "Amazon Kinesis Data Streams"],
        answer: ["Amazon MQ"],
        type: "single"
    },
    {
        question: "AWS Compute Optimizer delivers recommendations for which of the following AWS resources? (Select two)",
        options: ["Amazon Elastic Block Store (Amazon EBS), AWS Lambda functions", "Amazon Elastic Compute Cloud (Amazon EC2) instances, Amazon Elastic File System (Amazon EFS)", "AWS Lambda functions, Amazon Simple Storage Service (Amazon S3)", "Amazon Elastic Compute Cloud (Amazon EC2) instances, Amazon EC2 Auto Scaling groups", "Amazon Elastic File System (Amazon EFS), AWS Lambda functions"],
        answer: ["Amazon Elastic Block Store (Amazon EBS), AWS Lambda functions", "Amazon Elastic Compute Cloud (Amazon EC2) instances, Amazon EC2 Auto Scaling groups"],
        type: "multiple"
    },
    {
        question: "What is the primary benefit of deploying an Amazon RDS Multi-AZ database with one standby?",
        options: ["Amazon RDS Multi-AZ reduces database usage costs", "Amazon RDS Multi-AZ improves database performance for read-heavy workloads", "Amazon RDS Multi-AZ enhances database availability", "Amazon RDS Multi-AZ protects the database from a regional failure"],
        answer: ["Amazon RDS Multi-AZ enhances database availability"],
        type: "single"
    },
    {
        question: "A data analytics company stores its data on Amazon Simple Storage Service (Amazon S3) and wants to do SQL based analysis on this data with minimum effort. As a Cloud Practitioner, which of the following AWS services will you suggest for this use case?",
        options: ["Amazon Athena", "Amazon Aurora", "Amazon DynamoDB", "Amazon Redshift"],
        answer: ["Amazon Athena"],
        type: "single"
    },
    {
        question: "An IT company wants to run a log backup process every Monday at 2 AM. The usual runtime of the process is 5 minutes. As a Cloud Practitioner, which AWS services would you recommend to build a serverless solution for this use-case? (Select two)",
        options: ["Amazon Eventbridge", "AWS Lambda", "AWS Systems Manager", "AWS Step Function", "Amazon Elastic Compute Cloud (Amazon EC2)"],
        answer: ["Amazon Eventbridge", "AWS Lambda"],
        type: "multiple"
    },
    {
        question: "A photo sharing web application wants to store thumbnails of user-uploaded images on Amazon Simple Storage Service (Amazon S3). The thumbnails are rarely used but need to be immediately accessible from the web application. The thumbnails can be regenerated easily if they are lost. Which is the most cost-effective way to store these thumbnails on Amazon Simple Storage Service (Amazon S3)?",
        options: ["Use Amazon S3 Standard-Infrequent Access (S3 Standard-IA) to store the thumbnails", "Use Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) to store the thumbnails", "Use Amazon S3 Glacier Flexible Retrieval to store the thumbnails", "Use Amazon S3 Standard to store the thumbnails"],
        answer: ["Use Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) to store the thumbnails"],
        type: "single"
    },
    {
        question: "Which Amazon Route 53 routing policy would you use to improve the performance for your customers by routing the requests to the AWS endpoint that provides the fastest experience?",
        options: ["Simple routing", "Failover routing", "Latency-based routing", "Weighted routing"],
        answer: ["Latency-based routing"],
        type: "multiple"
    },
    {
        question: "Which of the following statements are correct about the AWS root user account? (Select two)",
        options: ["Root user account gets unrestricted permissions when the account is created, but these can be restricted using IAM policies", "Root user credentials should only be shared with managers requiring administrative responsibilities to complete their jobs", "It is highly recommended to enable Multi-Factor Authentication (MFA) for root user account", "Root user account password cannot be changed once it is set", "Root user access credentials are the email address and password used to create the AWS account"],
        answer: ["It is highly recommended to enable Multi-Factor Authentication (MFA) for root user account", "Root user access credentials are the email address and password used to create the AWS account"],
        type: "multiple"
    },
    {
        question: "Which of the following AWS services are global in scope? (Select two)",
        options: ["Amazon Elastic Compute Cloud (Amazon EC2)", "Amazon CloudFront", "Amazon Relational Database Service (Amazon RDS)", "AWS Identity and Access Management (AWS IAM)", "Amazon Simple Storage Service (Amazon S3)"],
        answer: ["Amazon CloudFront", "AWS Identity and Access Management (AWS IAM)"],
        type: "multiple"
    },
    {
        question: "The engineering team at an IT company wants to monitor the CPU utilization for its fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances and send an email to the administrator if the utilization exceeds 80%. As a Cloud Practitioner, which AWS services would you recommend to build this solution? (Select two)",
        options: ["Amazon CloudWatch", "Amazon Simple Queue Service (SQS)", "AWS Lambda", "AWS CloudTrail", "Amazon Simple Notification Service (SNS)"],
        answer: ["Amazon CloudWatch", "Amazon Simple Notification Service (SNS)"],
        type: "multiple"
    },
    {
        question: "A developer has written a simple web application in PHP and he wants to just upload his code to AWS Cloud and have AWS handle the deployment automatically but still wants access to the underlying operating system for further enhancements. As a Cloud Practioner, which of the following AWS services would you recommend for this use-case?",
        options: ["Amazon Elastic Compute Cloud (Amazon EC2)", "AWS Elastic Beanstalk", "Amazon Elastic Container Service (Amazon ECS)", "AWS CloudFormation"],
        answer: ["AWS Elastic Beanstalk"],
        type: "single"
    },
    {
        question: "Which AWS service can be used to provision resources to run big data workloads on Hadoop clusters?",
        options: ["AWS Step Functions", "AWS Batch", "Amazon Elastic Compute Cloud (Amazon EC2)", "Amazon EMR"],
        answer: ["Amazon EMR"],
        type: "single"
    },
    {
        question: "Which Amazon Elastic Compute Cloud (Amazon EC2) pricing model is the most cost-effective and flexible with no requirement for a long term resource commitment or upfront payment but still guarantees that instance would not be interrupted?",
        options: ["Reserved Instance (RI)", "Spot Instance", "Dedicated Host", "On-demand Instance"],
        answer: ["On-demand Instance"],
        type: "single"
    },
    {
        question: "Which of the following statement is correct regarding the AWS pricing policy for data transfer charges into or out of an AWS Region?",
        options: ["Only inbound data transfer is charged", "Neither inbound nor outbound data transfer are charged", "Both inbound data transfer and outbound data transfer are charged", "Only outbound data transfer is charged"],
        answer: ["Only outbound data transfer is charged"],
        type: "single"
    },
    {
        question: "Which AWS support plan provides access to a designated Technical Account Manager (TAM)?",
        options: ["AWS Business Support", "AWS Enterprise Support", "AWS Enterprise On-Ramp Support", "AWS Developer Support"],
        answer: ["AWS Enterprise Support"],
        type: "single"
    },
    {
        question: "A retail company has multiple AWS accounts for each of its departments. Which of the following AWS services can be used to set up consolidated billing and a single payment method for these AWS accounts?",
        options: ["AWS Secrets Manager", "AWS Organizations", "AWS Cost Explorer", "AWS Budgets"],
        answer: ["AWS Organizations"],
        type: "single"
    },
    {
        question: "A startup is looking for 24x7 phone based technical support for its AWS account. Which of the following is the MOST cost-effective AWS support plan for this use-case?",
        options: ["AWS Enterprise On-Ramp Support", "AWS Developer Support", "AWS Business Support", "AWS Enterprise Support"],
        answer: ["AWS Business Support"],
        type: "single"
    },
    {
        question: "Which AWS service would you use to send alerts when the costs for your AWS account exceed your budgeted amount?",
        options: ["AWS Cost Explorer", "AWS Pricing Calculator", "AWS Budgets", "AWS Organizations"],
        answer: ["AWS Budgets"],
        type: "single"
    },
    {
        question: "Which of the following AWS services can be used to prevent Distributed Denial-of-Service (DDoS) attack? (Select three)",
        options: ["Amazon Inspector", "AWS Shield", "Amazon CloudFront with Amazon Route 53", "AWS Web Application Firewall (AWS WAF)", "AWS Trusted Advisor", "AWS CloudHSM"],
        answer: ["AWS Shield", "Amazon CloudFront with Amazon Route 53", "AWS Web Application Firewall (AWS WAF)"],
        type: "multiple"
    },
    {
        question: "What foundational capability under the operations perspective is part of the AWS Cloud Adoption Framework (AWS CAF)?",
        options: ["Platform engineering", "Vulnerability management", "Application portfolio management", "Performance and capacity management"],
        answer: ["Performance and capacity management"],
        type: "single"
    },
    {
        question: "Access Key ID and Secret Access Key are tied to which of the following AWS Identity and Access Management (AWS IAM) entities?",
        options: ["IAM Policy", "IAM User Group", "IAM User", "IAM Role"],
        answer: ["IAM User"],
        type: "single"
    },
    {
        question: "Which of the following solutions can you use to connect your on-premises network with AWS Cloud (Select two)?",
        options: ["AWS Virtual Private Network (VPN)", "Amazon Virtual Private Cloud (Amazon VPC)", "Internet Gateway", "AWS Direct Connect", "Amazon Route 53"],
        answer: ["AWS Virtual Private Network (VPN)", "AWS Direct Connect"],
        type: "multiple"
    },
    {
        question: "An organization is planning to move its infrastructure from the on-premises datacenter to AWS Cloud. As a Cloud Practioner, which options would you recommend so that the organization can identify the right AWS services to build solutions on AWS Cloud (Select two)?",
        options: ["AWS Organizations", "AWS Service Catalog", "AWS Partner Network (APN)", "AWS CloudTrail", "Amazon CloudWatch"],
        answer: ["AWS Service Catalog", "AWS Partner Network (APN)"],
        type: "single"
    },
    {
        question: "A social media company wants to protect its web application from common web exploits such as SQL injection and cross-site scripting. Which of the following AWS services can be used to address this use-case?",
        options: ["AWS Web Application Firewall (AWS WAF)", "Amazon Inspector", "Amazon GuardDuty", "AWS CloudWatch"],
        answer: ["AWS Web Application Firewall (AWS WAF)"],
        type: "single"
    },
    {
        question: "As per the AWS Shared Responsibility Model, which of the following is a responsibility of the customer from a security and compliance point of view?",
        options: ["Patching/fixing flaws within the AWS infrastructure", "Configuration management for AWS global infrastructure", "Managing patches of the guest operating system on Amazon Elastic Compute Cloud (Amazon EC2)", "Availability Zone (AZ) infrastructure management"],
        answer: ["Managing patches of the guest operating system on Amazon Elastic Compute Cloud (Amazon EC2)"],
        type: "single"
    },
    {
        question: "An organization has a complex IT architecture involving a lot of system dependencies and it wants to track the history of changes to each resource. Which AWS service will help the organization track the history of configuration changes for all the resources?",
        options: ["AWS CloudFormation", "AWS Service Catalog", "AWS Config", "AWS CloudTrail", "Identity and Access Management"],
        answer: ["AWS Config"],
        type: "single"
    },
    {
        question: "As per the AWS Shared Responsibility Model, which of the following is a responsibility of AWS from a security and compliance point of view?",
        options: ["Customer Data", "Server-side Encryption (SSE)", "Edge Location Management"],
        answer: ["Edge Location Management"],
        type: "single"
    },
    {
        question: "Due to regulatory and compliance reasons, an organization is supposed to use a hardware device for any data encryption operations in the cloud. Which AWS service can be used to meet this compliance requirement?",
        options: ["AWS Key Management Service (AWS KMS)", "AWS Trusted Advisor", "AWS CloudHSM", "AWS Secrets Manager"],
        answer: ["AWS CloudHSM"],
        type: "single"
    },
    {
        question: "An e-commerce company wants to assess its applications deployed on Amazon Elastic Compute Cloud (Amazon EC2) instances for vulnerabilities and deviations from AWS best practices. Which AWS service can be used to facilitate this?",
        options: ["AWS CloudHSM", "AWS Trusted Advisor", "AWS Secrets Manager", "Amazon Inspector"],
        answer: ["Amazon Inspector"],
        type: "single"
    },
    {
        question: "According to the AWS Shared Responsibility Model, which of the following are responsibilities of the customer for Amazon RDS?",
        options: ["Applying patches to the underlying OS", "Managing the underlying server hardware on which Amazon Relational Database Service (Amazon RDS) runs", "Applying patches to the Amazon Relational Database Service (Amazon RDS) database", "Database encryption"],
        answer: ["Database encryption"],
        type: "single"
    }
];

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle the questions and options
shuffleArray(questions);
questions.forEach(question => shuffleArray(question.options));

// Variables for quiz functionality
let currentQuestionIndex = 0;
let timerInterval;
const questionsContainer = document.getElementById("questions-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const revealBtn = document.getElementById("reveal-btn"); // Button for manual reveal

// Function to load a question
function loadQuestion(index) {
    const questionObj = questions[index];
    questionsContainer.innerHTML = "";

    // Display question number
    const questionNumber = document.createElement("p");
    questionNumber.textContent = `Question ${index + 1} of ${questions.length}`;
    questionNumber.classList.add("question-number");
    questionsContainer.appendChild(questionNumber);

    // Display question text
    const questionText = document.createElement("p");
    questionText.textContent = questionObj.question;
    questionsContainer.appendChild(questionText);

    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("options");

    questionObj.options.forEach((option, i) => {
        const optionDiv = document.createElement("div");
        const optionInput = document.createElement("input");
        optionInput.type = questionObj.type === "multiple" ? "checkbox" : "radio";
        optionInput.name = "option";
        optionInput.value = option;
        optionInput.id = `option-${index}-${i}`;

        const optionLabel = document.createElement("label");
        optionLabel.htmlFor = optionInput.id;
        optionLabel.textContent = option;

        optionDiv.appendChild(optionInput);
        optionDiv.appendChild(optionLabel);
        optionsContainer.appendChild(optionDiv);
    });

    questionsContainer.appendChild(optionsContainer);
    displayTimer();
    revealBtn.style.display = "block"; // Show the reveal button
}

// Function to display the timer
function displayTimer() {
    const timerElement = document.createElement("div");
    timerElement.classList.add("timer");
    timerElement.textContent = "Time left: 1:30";

    let timeLeft = 90; // 1.5 minutes in seconds
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `Time left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            revealAnswer(); // Reveal answer when time elapses
        }
    }, 1000);

    questionsContainer.appendChild(timerElement);
}

// Function to reveal the correct answer
function revealAnswer() {
    const questionObj = questions[currentQuestionIndex];
    const correctAnswerElement = document.createElement("div");
    correctAnswerElement.classList.add("correct-answer");

    if (questionObj.type === "multiple") {
        correctAnswerElement.textContent = `Correct answers: ${questionObj.answer.join(", ")}`;
    } else {
        correctAnswerElement.textContent = `Correct answer: ${questionObj.answer[0]}`;
    }

    questionsContainer.appendChild(correctAnswerElement);
    revealBtn.style.display = "none"; // Hide reveal button after showing answer
}

// Add functionality to the manual reveal button
revealBtn.addEventListener("click", () => {
    clearInterval(timerInterval); // Stop the timer
    revealAnswer(); // Reveal the answer
});

// Navigation button functionality
prevBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
        nextBtn.disabled = false;
    }
    if (currentQuestionIndex === 0) {
        prevBtn.disabled = true;
    }
});

nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
        prevBtn.disabled = false;
    }
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.disabled = true;
    }
});

// Initial load
loadQuestion(currentQuestionIndex);
