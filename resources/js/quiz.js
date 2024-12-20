// Questions Data Structure
const questions = [
    {
        question: "Which of the following is the best way to protect your data from accidental deletion on Amazon S3?",
        options: ["Amazon S3 Transfer Acceleration (Amazon S3TA)", "Amazon S3 storage classes", "Amazon S3 lifecycle configuration", "Amazon S3 Versioning"],
        answer: ["Amazon S3 Versioning"],
        type: "single"
    },
    {
        question: "A leading research firm needs to access information available in old patents and documents (such as PDFs, Text Files, Word documents, etc) present in its huge knowledge base. The firm is looking for a powerful search tool that can dig into these knowledge resources and return the most relevant files/documents. Which of the following is the correct service to address this requirement?",
        options: ["Amazon Personalize", "Amazon Lex", "Amazon Kendra", "Amazon Comprehend"],
        answer: ["Amazon Kendra"],
        type: "multiple"
    },
    {
        question: "A startup runs its proprietary application on docker containers. As a Cloud Practitioner, which AWS service would you recommend so that the startup can run containers and still have access to the underlying servers?",
        options: ["AWS Fargate", "AWS Lambda", "Amazon Elastic Container Service (Amazon ECS)", "Amazon Elastic Container Registry (Amazon ECR)"],
        answer: ["Amazon Elastic Container Service (Amazon ECS)"],
        type: "single"
    },
    {
        question: "Which of the following AWS entities provides the information required to launch an Amazon Elastic Compute Cloud (Amazon EC2) instance?",
        options: ["Amazon Elastic File System (Amazon EFS)", "Amazon Elastic Block Store (Amazon EBS)", "AWS Lambda", "Amazon Machine Image (AMI)"],
        answer: ["Amazon Machine Image (AMI)"],
        type: "single"
    },
    {
        question: "Which of the following capabilities does Amazon Rekognition provide as a ready-to-use feature?",
        options: ["Resize images quickly", "Convert images into greyscale", "Identify objects in a photo", "Human pose detection"],
        answer: ["Identify objects in a photo"],
        type: "single"
    },
    {
        question: "Which AWS service can be used for online analytical processing?",
        options: ["Amazon DynamoDB", "Amazon Relational Database Service (Amazon RDS)", "Amazon ElastiCache", "Amazon Redshift"],
        answer: ["Amazon Redshift"],
        type: "single"
    },
    {
        question: "Which of the following AWS services are regional in scope? (Select two)",
        options: ["Amazon Rekognition", "AWS Lambda", "AWS Identity and Access Management (AWS IAM)", "AWS Web Application Firewall (AWS WAF)", "Amazon CloudFront"],
        answer: ["Amazon Rekognition", "AWS Lambda"],
        type: "multiple"
    },
    {
        question: "Which of the following statements are CORRECT regarding security groups and network access control lists (network ACL)? (Select two)",
        options: ["A security group is stateful, that is, it automatically allows", "A network access control list (network ACL) contains a numbered list of rules and evaluates these rules in the increasing order while deciding whether to allow the traffic", "A network access control list (network ACL) is stateful, that is, it automatically allows the return traffic", "A security group contains a numbered list of rules and evaluates these rules in the increasing order while deciding whether to allow the traffic", "A security group is stateless, that is, the return traffic must be explicitly allowed"],
        answer: ["A security group is stateful, that is, it automatically allows the return traffic", "A network access control list (network ACL) contains a numbered list of rules and evaluates these rules in the increasing order while deciding whether to allow the traffic"],
        type: "multiple"
    },
    {
        question: "Which AWS service can be used to execute code triggered by new files being uploaded to Amazon Simple Storage Service (Amazon S3)?",
        options: ["Amazon Elastic Container Service (Amazon ECS)", "Amazon Simple Queue Service (Amazon SQS)", "AWS Lambda", "Amazon Elastic Compute Cloud (Amazon EC2)"],
        answer: ["AWS Lambda"],
        type: "single"
    },
    {
        question: "Which Amazon Simple Storage Service (Amazon S3) storage class offers the lowest availability?",
        options: ["Amazon S3 Intelligent-Tiering", "Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)", "Amazon S3 Standard", "Amazon S3 Glacier Flexible Retrieval"],
        answer: ["Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)"],
        type: "single"
    },
    {
        question: "Which of the following are components of an AWS Site-to-Site VPN? (Select two)",
        options: ["Network Address Translation gateway (NAT gateway)", "Customer gateway", "AWS storage gateway", "Internet gateway", "Virtual private gateway (VGW)"],
        answer: ["Customer gateway", "Virtual private gateway (VGW)"],
        type: "multiple"
    },
    {
        question: "An IT company has deployed a static website on Amazon Simple Storage Service (Amazon S3), but the website is still inaccessible. As a Cloud Practioner, which of the following solutions would you suggest to address this issue?",
        options: ["Fix the Amazon S3 bucket policy", "Disable Amazon S3 encryption", "Enable Amazon S3 replication", "Enable Amazon S3 versioning"],
        answer: ["Fix the Amazon S3 bucket policy"],
        type: "single"
    },
    {
        question: "Which AWS services/features support High Availability by default? (Select two)",
        options: ["Amazon DynamoDB", "Amazon Elastic File System (Amazon EFS)", "Instance Store", "Subnet", "Amazon Elastic Block Store (Amazon EBS)"],
        answer: ["Amazon DynamoDB", "Amazon Elastic File System (Amazon EFS)"],
        type: "multiple"
    },
    {
        question: "Which AWS service will you use if you have to move large volumes of on-premises data to AWS Cloud from a remote location with limited bandwidth?",
        options: ["AWS Virtual Private Network (VPN)", "AWS Snowball", "AWS Direct Connect", "AWS Transit Gateway"],
        answer: ["AWS Snowball"],
        type: "single"
    },
    {
        question: "Which AWS service can be used to automate code deployment to Amazon Elastic Compute Cloud (Amazon EC2) instances as well as on-premises instances?",
        options: ["AWS CodeCommit", "AWS CodePipeline", "AWS CodeDeploy", "AWS CloudFormation"],
        answer: ["AWS CodeDeploy"],
        type: "single"
    },
    {
        question: "Which AWS service can be used as an in-memory database with high-performance and low latency?",
        options: ["Amazon Athena", "Amazon DynamoDB", "Amazon Relational Database Service (Amazon RDS)", "Amazon ElastiCache"],
        answer: ["Amazon ElastiCache"],
        type: "single"
    },
    {
        question: "AWS Lambda pricing is based on which of the following criteria? (Select two)",
        options: ["The time it takes for the AWS Lambda function to execute", "The language runtime of the AWS Lambda function", "The number of lines of code for the AWS Lambda function", "Number of requests for the AWS Lambda function", "The size of the deployment package for the AWS Lambda function"],
        answer: ["The time it takes for the AWS Lambda function to execute", "Number of requests for the AWS Lambda function"],
        type: "multiple"
    },
    {
        question: "Which Amazon Route 53 routing policy would you use when you want to route your traffic in an active-passive configuration?",
        options: ["Failover routing", "Simple routing", "Weighted routing", "Latency-based routing"],
        answer: ["Failover routing"],
        type: "single"
    },
    {
        question: "Which of the following improves the availability for a fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances?",
        options: ["Deploy the Amazon Elastic Compute Cloud (Amazon EC2) instances in the same Availability Zone (AZ) across two different AWS Regions", "Deploy the Amazon Elastic Compute Cloud (Amazon EC2) instances across different AWS Regions of the same Availability Zone (AZ)", "Deploy the Amazon Elastic Compute Cloud (Amazon EC2) instances in the same Availability Zone (AZ) of an AWS Region", "Deploy the Amazon Elastic Compute Cloud (Amazon EC2) instances across different Availability Zones (AZ) in the same AWS Region"],
        answer: ["Deploy the Amazon Elastic Compute Cloud (Amazon EC2) instances across different Availability Zones (AZ) in the same AWS Region"],
        type: "single"
    },
    {
        question: "A financial services company must meet compliance requirements that mandate storing multiple copies of data in geographically distant locations. As the company uses Amazon Simple Storage Service (Amazon S3) as its main storage service, which of the following represents the MOST resource-efficient solution for this use-case?",
        options: ["For every new object, trigger an AWS Lambda function to write data into a bucket in another AWS Region", "Use S3 cross-region replication (S3 CRR) to replicate data between distant AWS Regions", "Run a daily job on an Amazon Elastic Compute Cloud (Amazon EC2) instance to copy objects into another Region", "Use S3 same-region replication (S3 SRR) to replicate data between distant AWS Regions"],
        answer: ["Use S3 cross-region replication (S3 CRR) to replicate data between distant AWS Regions"],
        type: "single"
    },
    {
        question: "A medical device company is looking for a durable and cost-effective way of storing their historic data. Due to compliance requirements, the data must be stored for 10 years. Which AWS Storage solution will you suggest?",
        options: ["Amazon S3 Glacier Deep Archive", "AWS Storage Gateway", "Amazon S3 Glacier Flexible Retrieval", "Amazon Elastic File System (Amazon EFS)"],
        answer: ["Amazon S3 Glacier Deep Archive"],
        type: "single"
    },
    {
        question: "A research lab wants to optimize the caching capabilities for its scientific computations application running on Amazon Elastic Compute Cloud (Amazon EC2) instances. Which Amazon Elastic Compute Cloud (Amazon EC2) storage option is best suited for this use-case?",
        options: ["Amazon Elastic File System (Amazon EFS)", "Amazon Elastic Block Store (Amazon EBS)", "Amazon Simple Storage Service (Amazon S3)", "Instance Store"],
        answer: ["Instance Store"],
        type: "single"
    },
    {
        question: "An AWS user is trying to launch an Amazon Elastic Compute Cloud (Amazon EC2) instance in a given region. What is the region-specific constraint that the Amazon Machine Image (AMI) must meet so that it can be used for this Amazon Elastic Compute Cloud (Amazon EC2) instance?",
        options: ["An Amazon Machine Image (AMI) is a global entity, so the region is not applicable", "You should use an Amazon Machine Image (AMI) from the same region, as it improves the performance of the Amazon EC2 instance", "You can use an Amazon Machine Image (AMI) from a different region, but it degrades the performance of the Amazon EC2 instance", "You must use an Amazon Machine Image (AMI) from the same region as that of the Amazon EC2 instance. The region of the Amazon Machine Image (AMI) has no bearing on the performance of the Amazon EC2 instance"],
        answer: ["You must use an Amazon Machine Image (AMI) from the same region as that of the Amazon EC2 instance. The region of the Amazon Machine Image (AMI) has no bearing on the performance of the Amazon EC2 instance"],
        type: "single"
    },
    {
        question: "An IT company would like to move its IT resources (including any data and applications) from an AWS Region in the US to another AWS Region in Europe. Which of the following represents the correct solution for this use-case?",
        options: ["The company should use AWS CloudFormation to move the resources (including any data and applications) from source AWS Region to destination AWS Region", "The company should just start creating new resources in the destination AWS Region and then migrate the relevant data and applications into this new AWS Region", "The company should use AWS Database Migration Service (AWS DMS) to move the resources (including any data and applications) from source AWS Region to destination AWS Region", "he company should raise a ticket with AWS Support for this resource migration"],
        answer: ["The company should just start creating new resources in the destination AWS Region and then migrate the relevant data and applications into this new AWS Region"],
        type: "single"
    },
    {
        question: "What is the primary benefit of deploying an Amazon Relational Database Service (Amazon RDS) database in a Read Replica configuration?",
        options: ["Read Replica reduces database usage costs", "Read Replica protects the database from a regional failure", "Read Replica improves database scalability", "Read Replica enhances database availability"],
        answer: ["Read Replica improves database scalability"],
        type: "single"
    },
    {
        question: "Which of the following use cases is best suited for Amazon EFS Standard-Infrequent Access (EFS Standard-IA) storage class?",
        options: ["Storing data in a single AWS Availability Zone (AZ)", "Object storage for workloads that need sub-second latency speeds for accessing the data", "Use as boot volume for highly available Amazon Elastic Compute Cloud (Amazon EC2) instances", "Storing files in an accessible location to satisfy audit requirements"],
        answer: ["Storing files in an accessible location to satisfy audit requirements"],
        type: "single"
    },
    {
        question: "As a Cloud Practitioner, which Amazon Simple Storage Service (Amazon S3) storage class would you recommend for data archival?",
        options: ["Amazon S3 Standard", "Amazon S3 Glacier Flexible Retrieval", "Amazon S3 Intelligent-Tiering", "Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)"],
        answer: ["Amazon S3 Glacier Flexible Retrieval"],
        type: "single"
    },
    {
        question: "A company has a static website hosted on an Amazon Simple Storage Service (Amazon S3) bucket in an AWS Region in Asia. Although most of its users are in Asia, now it wants to drive growth globally. How can it improve the global performance of its static website?",
        options: ["Use Amazon CloudFront to improve the performance of your website", "Use Amazon S3 Transfer Acceleration (Amazon S3TA) to improve the performance of your website", "Use Amazon CloudFormation to improve the performance of your website", "Use AWS Web Application Firewall (AWS WAF) to improve the performance of your website"],
        answer: ["Use Amazon CloudFront to improve the performance of your website"],
        type: "single"
    },
    {
        question: "Which of the following statements is correct regarding the Amazon Elastic File System (Amazon EFS) storage service?",
        options: ["EC2 instances can access files on an Amazon Elastic File System (Amazon EFS) file system across many Availability Zones (AZ), Regions and VPCs", "EC2 instances can access files on an Amazon Elastic File System (Amazon EFS) file system across many Availability Zones (AZ) but not across VPCs and Regions", "EC2 instances can access files on an Amazon Elastic File System (Amazon EFS) file system across many Availability Zones (AZ) and VPCs but not across Regions", "EC2 instances can access files on an Amazon Elastic File System (Amazon EFS) file system only in one Availability Zone (AZ)"],
        answer: ["EC2 instances can access files on an Amazon Elastic File System (Amazon EFS) file system across many Availability Zones (AZ), Regions and VPCs"],
        type: "single"
    },
    {
        question: "AWS Identity and Access Management (AWS IAM) policies are written as JSON documents. Which of the following are mandatory elements of an IAM policy?",
        options: ["Action, Condition", "Effect, Sid", "Effect, Action", "Sid, Principal"],
        answer: ["Effect, Action"],
        type: "single"
    },
    {
        question: "Which of the following AWS services offer block-level storage? (Select two)",
        options: ["Instance Store", "Amazon Elastic File System (Amazon EFS)", "Amazon Elastic Block Store (Amazon EBS)", "Amazon Elastic Container Service (Amazon ECS)", "Amazon Simple Storage Service (Amazon S3)"],
        answer: ["Instance Store", "Amazon Elastic Block Store (Amazon EBS)"],
        type: "single"
    },
    {
        question: "Which of the following statements are CORRECT about the AWS Auto Scaling group? (Select two)",
        options: ["Auto Scaling group scales out and adds more number of Amazon EC2 instances to match an increase in demand", "Auto Scaling group scales up and upgrades to a more powerful Amazon EC2 instance to match an increase in demand", "Auto Scaling group scales down and downgrades to a less powerful Amazon EC2 instance to match a decrease in demand", "Auto Scaling group scales down and reduces the number of Amazon EC2 instances to match a decrease in demand", "Auto Scaling group scales in and reduces the number of Amazon EC2 instances to match a decrease in demand"],
        answer: ["Auto Scaling group scales out and adds more number of Amazon EC2 instances to match an increase in demand", "Auto Scaling group scales in and reduces the number of Amazon EC2 instances to match a decrease in demand"],
        type: "multiple"
    },
    {
        question: "A research group wants to provision an Amazon Elastic Compute Cloud (Amazon EC2) instance for a flexible application that can be interrupted. As a Cloud Practitioner, which of the following would you recommend as the MOST cost-optimal option?",
        options: ["Spot Instance", "On-Demand Instance", "Reserved Instance (RI)", "Dedicated Host"],
        answer: ["Spot Instance"],
        type: "single"
    },
    {
        question: "A startup has just moved its IT infrastructure to AWS Cloud. The CTO would like to receive detailed reports that break down the startup's AWS costs by the hour in an Amazon Simple Storage Service (Amazon S3) bucket. As a Cloud Practitioner, which AWS service would you recommend for this use-case?",
        options: ["AWS Cost & Usage Report (AWS CUR)", "AWS Budgets", "AWS Pricing Calculator", "AWS Cost Explorer"],
        answer: ["AWS Cost & Usage Report (AWS CUR)"],
        type: "single"
    },
    {
        question: "Compared to the on-demand instance prices, what is the highest possible discount offered for reserved instances (RI)?",
        options: ["40", "50", "72", "90"],
        answer: ["72"],
        type: "single"
    },
    {
        question: "Amazon CloudWatch billing metric data is stored in which AWS Region?",
        options: ["US West (N. California) - us-west-1", "US East (N. Virginia) - us-east-1", "In the AWS Region where the AWS resource is provisioned", "In the AWS Region where the AWS account is created"],
        answer: ["US East (N. Virginia) - us-east-1"],
        type: "single"
    },
    {
        question: "An e-commerce company uses AWS Cloud and would like to receive separate invoices for development and production environments. As a Cloud Practioner, which of the following solutions would you recommend for this use-case?",
        options: ["Use AWS Organizations to create separate invoices for development and production environments", "Use AWS Cost Explorer to create separate invoices for development and production environments", "Tag all resources in the AWS account as either development or production. Then use the tags to create separate invoices", "Create separate AWS accounts for development and production environments to receive separate invoices"],
        answer: ["Create separate AWS accounts for development and production environments to receive separate invoices"],
        type: "single"
    },
    {
        question: "Which of the following statements are true about Cost Allocation Tags in AWS Billing? (Select two)",
        options: ["For each resource, each tag key must be unique, but can have multiple values", "Tags help in organizing resources and are a mandatory configuration item to run reports", "Only user-defined tags need to be activated before they can appear in Cost Explorer or on a cost allocation report", "You must activate both AWS generated tags and user-defined tags separately before they can appear in Cost Explorer or on a cost allocation report", "For each resource, each tag key must be unique, and each tag key can have only one value"],
        answer: ["You must activate both AWS generated tags and user-defined tags separately before they can appear in Cost Explorer or on a cost allocation report", "For each resource, each tag key must be unique, and each tag key can have only one value"],
        type: "multiple"
    },
    {
        question: "Which budget types can be created under AWS Budgets (Select three)?",
        options: ["Software budget", "Hardware budget", "Reservation budget", "Resource budget", "Cost budget", "Usage budget"],
        answer: ["Reservation budget", "Cost budget", "Usage budget"],
        type: "single"
    },
    {
        question: "A customer is running a comparative study of pricing models of Amazon EFS and Amazon Elastic Block Store (Amazon EBS) that are used with the Amazon EC2 instances that host the application. Which of the following statements are correct regarding this use-case? (Select two)",
        options: ["With AWS Backup, you pay only for the amount of Amazon Elastic File System (Amazon EFS) backup storage you use in a month, you need not pay for restoring this data", "Amazon Elastic Block Store (Amazon EBS) Snapshot storage pricing is based on the amount of space your data consumes in Amazon Elastic Block Store (Amazon EBS)", "Amazon Elastic Block Store (Amazon EBS) Snapshots are stored incrementally, which means you are billed only for the changed blocks stored", "You will pay a fee each time you read from or write data stored on the Amazon Elastic File System (Amazon EFS) - Infrequent Access storage class"],
        answer: ["Amazon Elastic Block Store (Amazon EBS) Snapshots are stored incrementally, which means you are billed only for the changed blocks stored", "You will pay a fee each time you read from or write data stored on the Amazon Elastic File System (Amazon EFS) - Infrequent Access storage class"],
        type: "multiple"
    },
    {
        question: "Which AWS service can help you create data-driven business cases for transitioning your business from on-premises to AWS Cloud?",
        options: ["AWS Migration Evaluator", "AWS Trusted Advisor", "AWS Billing and Cost Management", "AWS Budgets"],
        answer: ["AWS Migration Evaluator"],
        type: "single"
    },
    {
        question: "Which of the following is correct regarding the AWS Shield Advanced pricing?",
        options: ["AWS Shield Advanced is a free service for AWS Business Support plan", "AWS Shield Advanced is a free service for AWS Enterprise Support plan", "AWS Shield Advanced is a free service for all AWS Support plans", "AWS Shield Advanced offers protection against higher fees that could result from a DDoS attack"],
        answer: ["AWS Shield Advanced offers protection against higher fees that could result from a DDoS attack"],
        type: "single"
    },
    {
        question: "An IT company is on a cost-optimization spree and wants to identify all Amazon Elastic Compute Cloud (Amazon EC2) instances that are under-utilized. Which AWS services can be used off-the-shelf to address this use-case without needing any manual configurations? (Select two)",
        options: ["AWS Cost Explorer", "AWS Cost & Usage Report (AWS CUR)", "AWS Trusted Advisor", "AWS Budgets", "Amazon CloudWatch"],
        answer: ["AWS Cost Explorer", "AWS Trusted Advisor"],
        type: "multiple"
    },
    {
        question: "Which of the following is a part of the AWS Global Infrastructure?",
        options: ["Virtual Private Cloud (VPC)", "Virtual Private Network (VPN)", "AWS Region", "Subnet"],
        answer: ["AWS Region"],
        type: "single"
    },
    {
        question: "Which feature of AWS Cloud offers the ability to innovate faster and rapidly develop, test and launch software applications?",
        options: ["Cost savings", "Elasticity", "Agility", "Ability to deploy globally in minutes"],
        answer: ["Agility"],
        type: "single"
    },
    {
        question: "Which of the following Cloud Computing models does the 'gmail' service represent?",
        options: ["Platform as a service (PaaS)", "Function as a service (FaaS)", "Software as a service (SaaS)", "Infrastructure as a service (IaaS)"],
        answer: ["Software as a service (SaaS)"],
        type: "single"
    },
    {
        question: "An organization maintains separate Amazon Virtual Private Clouds (Amazon VPC) for each of its departments. With expanding business, the organization now wants to connect all Amazon Virtual Private Clouds (Amazon VPC) for better departmental collaboration. Which AWS service will help the organization tackle the issue effectively?",
        options: ["AWS Direct Connect", "AWS Transit Gateway", "AWS Site-to-Site VPN", "VPC peering connection"],
        answer: ["AWS Transit Gateway"],
        type: "single"
    },
    {
        question: "A company is looking for a guided path to help deploy, configure, and secure its new workloads while ensuring that it is ready for on-going operations in the cloud. Which of the following AWS services/tools can be leveraged for this use case?",
        options: ["Cloud Foundations", "AWS Trusted Advisor", "AWS Shared Responsibility Model", "AWS Config"],
        answer: ["Cloud Foundations"],
        type: "single"
    },
    {
        question: "Which of the following is a perspective of the AWS Cloud Adoption Framework (AWS CAF)?",
        options: ["Process", "Product", "Architecture", "Business"],
        answer: ["Business"],
        type: "single"
    },
    {
        question: "Which pillar of the AWS Well-Architected Framework recommends maintaining infrastructure as code (IaC)?",
        options: ["Cost Optimization", "Performance Efficiency", "Operational Excellence", "Security"],
        answer: ["Operational Excellence"],
        type: "single"
    },
    {
        question: "A development team is looking for a forum where the most frequent questions and requests from AWS customers are listed along with AWS provided solutions. Which AWS forum/service can be used for troubleshooting an issue or checking for a solution?",
        options: ["AWS Marketplace", "AWS Knowledge Center", "AWS Health Dashboard - service health", "AWS Support Center"],
        answer: ["AWS Knowledge Center"],
        type: "single"
    },
    {
        question: "According to the AWS Shared Responsibility Model, which of the following are the responsibilities of the customer? (Select two)",
        options: ["Operating system patches and updates of an Amazon Elastic Compute Cloud (Amazon EC2) instance", "AWS Global Network Security", "Ensuring AWS employees cannot access customer data", "Compliance validation of Cloud infrastructure"],
        answer: ["Operating system patches and updates of an Amazon Elastic Compute Cloud (Amazon EC2) instance", "Enabling data encryption of data stored in Amazon Simple Storage Service (Amazon S3) buckets"],
        type: "multiple"
    },
    {
        question: "A financial services enterprise plans to enable Multi-Factor Authentication (MFA) for its employees. For ease of travel, they prefer not to use any physical devices to implement Multi-Factor Authentication (MFA). Which of the below options is best suited for this use case?",
        options: ["Soft Token Multi-Factor Authentication (MFA) device", "Hardware Multi-Factor Authentication (MFA) device", "Virtual Multi-Factor Authentication (MFA) device", "U2F security key"],
        answer: ["Virtual Multi-Factor Authentication (MFA) device"],
        type: "single"
    },
    {
        question: "Which AWS service protects your AWS account by monitoring malicious activity and detecting threats?",
        options: ["Amazon GuardDuty", "AWS Trusted Advisor", "AWS CloudTrail", "Amazon CloudWatch"],
        answer: ["Amazon GuardDuty"],
        type: "single"
    },
    {
        question: "An IT company has a hybrid cloud architecture and it wants to centralize the server logs for its Amazon Elastic Compute Cloud (Amazon EC2) instances and on-premises servers. Which of the following is the MOST effective for this use-case?",
        options: ["Use AWS Lambda to send log data from Amazon Elastic Compute Cloud (Amazon EC2) instance as well as on-premises servers to Amazon CloudWatch Logs", "Use Amazon CloudWatch Logs for both the Amazon Elastic Compute Cloud (Amazon EC2) instance and the on-premises servers", "Use Amazon CloudWatch Logs for the Amazon Elastic Compute Cloud (Amazon EC2) instance and AWS CloudTrail for the on-premises servers", "Use AWS CloudTrail for the Amazon Elastic Compute Cloud (Amazon EC2) instance and Amazon CloudWatch Logs for the on-premises servers"],
        answer: ["Use Amazon CloudWatch Logs for both the Amazon Elastic Compute Cloud (Amazon EC2) instance and the on-premises servers"],
        type: "single"
    },
    {
        question: "A multi-national company has its business-critical data stored on a fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances, in various countries, configured in region-specific compliance rules. To demonstrate compliance, the company needs to submit historical configurations on a regular basis. Which AWS service is best suited for this requirement?",
        options: ["Amazon Macie", "AWS CloudTrail", "AWS Config", "Amazon GuardDuty"],
        answer: ["AWS Config"],
        type: "single"
    },
    {
        question: "AWS Trusted Advisor analyzes your AWS environment and provides best practice recommendations for which of the following categories? (Select two)",
        options: ["Documentation", "Service Limits", "Change Management", "Elasticity", "Cost Optimization"],
        answer: ["Service Limits", "Cost Optimization"],
        type: "multiple"
    },
    {
        question: "An AWS hardware failure has impacted one of your Amazon Elastic Block Store (Amazon EBS) volumes. Which AWS service will alert you of the affected resources and provide a remedial action?",
        options: ["Amazon GuardDuty", "AWS Config", "AWS Trusted Advisor", "AWS Health Dashboard – Your account health"],
        answer: ["AWS Health Dashboard – Your account health"],
        type: "single"
    },
    {
        question: "A cyber-security agency uses AWS Cloud and wants to carry out security assessments on its own AWS infrastructure without any prior approval from AWS. Which of the following describes/facilitates this practice?",
        options: ["Amazon Inspector", "AWS Secrets Manager", "Network Stress Testing", "Penetration Testing"],
        answer: ["Penetration Testing"],
        type: "single"
    },
    {
        question: "Which of the following AWS services have data encryption automatically enabled? (Select two)?",
        options: ["Amazon Elastic File System (Amazon EFS)", "Amazon Redshift", "Amazon Simple Storage Service (Amazon S3)", "Amazon Elastic Block Store (Amazon EBS)", "AWS Storage Gateway"],
        answer: ["Amazon Simple Storage Service (Amazon S3)", "AWS Storage Gateway"],
        type: "multiple"
    },
    {
        question: "Under the AWS Shared Responsibility Model, which of the following is the responsibility of a customer regarding AWS Lambda?",
        options: ["Maintain all runtime environments for AWS Lambda functions", "Configure networking infrastructure for the AWS Lambda functions", "Maintain versions of an AWS Lambda function", "Patch underlying OS for the AWS Lambda function infrastructure"],
        answer: ["Maintain versions of an AWS Lambda function"],
        type: "single"
    },
    {
        question: "Which AWS service will you use to privately connect your virtual private cloud (VPC) to Amazon Simple Storage Service (Amazon S3)?",
        options: ["VPC Endpoint", "Amazon API Gateway", "AWS Direct Connect", "AWS Transit Gateway"],
        answer: ["VPC Endpoint"],
        type: "single"
    },
    {
        question: "Which of the following are correct statements regarding the AWS Shared Responsibility Model? (Select two)",
        options: ["For a service like Amazon EC2, that falls under Infrastructure as a Service (IaaS), AWS is responsible for maintaining guest operating system", "AWS is responsible for Security 'of' the Cloud", "Configuration Management is the responsibility of the customer", "AWS is responsible for training AWS and customer employees on AWS products and services", "For abstracted services like Amazon S3, AWS operates the infrastructure layer, the operating system, and platforms"],
        answer: ["AWS is responsible for Security 'of' the Cloud", "For abstracted services like Amazon S3, AWS operates the infrastructure layer, the operating system, and platforms"],
        type: "multiple"
    },
    {
        question: "Which of the following AWS services specialize in data migration from on-premises to AWS Cloud? (Select two)",
        options: ["AWS Snowball", "AWS Direct Connect", "AWS Transit Gateway", "AWS Database Migration Service (AWS DMS)", "AWS Site-to-Site VPN"],
        answer: ["AWS Snowball", "AWS Database Migration Service (AWS DMS)"],
        type: "multiple"
    },
    {
        question: "Which of the following are recommended best practices for AWS Identity and Access Management (AWS IAM) service? (Select two)",
        options: ["Rotate credentials regularly", "Create a minimum number of accounts and share these account credentials among employees", "Share AWS account root user access keys with other administrators", "Enable multi-factor authentication (MFA) for all users", "Grant maximum privileges to avoid assigning privileges again"],
        answer: ["Rotate credentials regularly", "Enable multi-factor authentication (MFA) for all users"],
        type: "multiple"
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
