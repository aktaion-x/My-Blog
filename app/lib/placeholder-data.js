const blogs = [
  {    
  title: "Getting Started with AWS 1",
  subtitle: "Create an AWS account and set up CLI/SDK access. the first one",
  date: "2020-12-1",
  tags: [1,2,4],
  content: `
"Cloud computing" plays a vital role in the creation of software products and services. It's also one of the most highly sought-after skills in the tech industry.

In fact, most of the projects on this site will require cloud interaction of some sort—particularly with AWS's serverless products.

## Getting Started

> To use AWS in these projects, we'll need to set up an account, the CLI, and the SDK.

### Create an account

If you don't already have an account then [sign up here](https://portal.aws.amazon.com/billing/signup#/start).

Once you are signed up, you should be able to log in to the [AWS Console](https://aws.amazon.com/console/). It might look overwhelming if you're seeing for the first time.

### Install the CLI

The AWS CLI is a command-line application that lets you interact with your AWS account from the terminal. It's available on all platforms.

If you are a proficient Python user, you can just install it with pip.

bash
pip install awscli


Otherwise, check out the [official instructions](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html).

Once installed, you should be able to run this command from the terminal to see its version.

bash
aws --version


### Create an IAM user

The CLI will access your AWS account via an "IAM user." You can create one from the **Users** page in your [IAM console](https://console.aws.amazon.com/iam).

Once the user is created, you'll need to generate access keys (passwords, essentially) for it.

* [Creating an Admin IAM User](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html)
* [Creating access keys for a user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)

Your access keys should look something like this:


Access key ID: AKIAIOSFODNN7EXAMPLE
Secret access key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY



### Configure the CLI

Next you need to [configure the CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html) so that it can access your AWS account via the IAM user.

Basically, just run this command and paste in your access keys.

bash
aws configure


Additionally, you'll also be asked for a [default region](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-region) and [default output format](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-format).

You may leave them empty—but generally I like to use:


Default region name [None]: us-east-1
Default output format [None]: json


### Configuration files

Once configured, the AWS CLI [saves the credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html) and region/format profiles to your computer. They are typically in these locations:


~/.aws/credentials
~/.aws/config


You can open them up and edit them if you like or just run aws configure again to change them.

### Test the CLI!

Now you should be able to use your CLI to access AWS. For example, I should be able to see the S3 buckets I have in us-east-1:

bash
aws s3 ls

2020-12-09 22:36:32 blog.pixegami.com
2020-12-27 00:04:52 cloud-archiver.5dac84a54677.archivetest


Generally, everything that can be done in the console can also be done in the CLI. Check out the [full reference guide here](https://docs.aws.amazon.com/cli/latest/index.html).

### AWS SDK

Finally, to use AWS directly from your application code, you need to download the [SDK](https://aws.amazon.com/tools/) for the language you work with.

The SDKs can be configured in different ways as well, but by default it usually uses the same profiles and credentials stored by your aws configure.


### That's it! 

You're all set to start using AWS.

## Why AWS?

When we bring "the cloud" into a project, it's usually because there's some capability we'd like to add.

* Hosting for a website or service.
* File or data storage.
* On-demand computation.
* Authentication.

And there's many viable solutions to choose from—[Azure](https://azure.microsoft.com/en-au/), [Google Cloud](https://cloud.google.com), [Firebase](https://firebase.google.com), [Digital Ocean](https://try.digitalocean.com).

So why could you choose [AWS](https://aws.amazon.com/what-is-aws/) over any of these alternatives? From a new user's perspective:

* **Largest marketshare (at 30%)** which roughly translates to lots of community resources and job opportunities.

* **Most services available (175+)** which means more tools at your disposal, well-integrated under one umbrella.

On the flip-side, the biggest drawback is its upfront complexity.

Personally though, the reason I use AWS is because it's the technology I'm most familiar with.


## Why Serverless?

**It's cheaper.** Most cloud "getting started" guides will show you how to spin up a server—a mercenary rented computer that stays online  24/7 to do your bidding.

But for most of my projects, I'm going utilize technology that doesn't require a hosted server. In particular:

| Service | Purpose |
| --- | --- |
| S3 | File storage |
| DynamoDB | Database |
| Lambda | Compute engine |

Their on-demand pricing means the cost scales with usage. There is a [free tier](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc), and it only begins to cost money if usage exceeds a certain amount.

For small projects with light traffic, this usually translates to monthly costs of **less than a dollar** (if not completely free).

In comparison, the price of hosting a server typically starts at **$5.00 per month**.

## Continue Learning

* [Official documentation](https://aws.amazon.com/getting-started/)
* [Free YouTube videos](https://www.youtube.com/watch?v=ubCNZRNjhyo)
* [Udemy Courses](https://www.udemy.com/course/aws-certified-developer-associate/)
`
  },
  {
    title: "Started with AWS 2",
    subtitle: "Delete an AWS account and set up CLI/SDK access. not extended",
    date: "2020-12-2",
    tags: [5,1,3],
    content: `
The [SaaS (software as a service)](https://en.wikipedia.org/wiki/Software_as_a_service) model underpins many of today's successful new businesses. Knowing how to build one from start to finish is probably a useful addition to any software developer's skill set.

But even when you strip a SaaS product of its business logic, there's still a non-trivial amount of work and trade-offs to consider.

In this project, my goal was to build a fully serverless SaaS web-app with authentication and payments — the two vital organs of any business.

My implementation is opinionated (as you'll see), and intended to serve as a starting point for new SaaS ideas in the future. Here's what's included:

- [Authentication](#authentication)
- [Payments (Stripe)](#payments-stripe)
- [Frontend (React)](#frontend-react)
- [Backend API](#backend-api)
- [Serverless architecture](#serverless-architecture)
- [Infrastructure as code](#infrastructure-as-code)
- [CRUD operations](#crud-operations)
- [Lessons Learnt](#lessons-learnt)

You can view the example at https://saas-starter-stack.com/app/ and the source on [GitHub](https://github.com/pixegami/saas-starter). In this post, I'll be reflecting on my choices and experience for each of the above features.

### Authentication

**Don't roll your own auth!** It's hard, and mistakes can be devastating to a business. With that said, I did it anyway — mostly to learn from it. Here's also some [discussion on Hackernews](https://news.ycombinator.com/item?id=22001918) on why you might want to build your own auth.

I used [bcrypt](https://codahale.com/how-to-safely-store-a-password/) and [JSON Web Tokens](https://jwt.io/), and stored credentials on DynamoDB. That part wasn't so bad. The real grind came from building things like exponential back-offs for failed attempts, account verification and reset mechanisms, and patching all the security edge cases.

I got it to a roughly working state, and then called it a day. If this was a production system, I'd probably look into something like [Cognito](https://aws.amazon.com/cognito/), [Firebase](https://firebase.google.com/products/auth) or [Okta](https://www.okta.com/).

### Payments (Stripe)

From payments integration, [Stripe](https://stripe.com) was an easy choice. No prominent alternative come to mind, and I've heard high praises about Stripe's developer onboarding experience.

I set up [subscription payment](https://stripe.com/en-au/billing) integration with the project, and I think the developer experience lives up to expectations. The tutorials were well structured and concise.

But the little thing that impressed me the most was when I typed in 'test card' in a [search box](https://stripe.com/docs/testing), it actually just straight up gave me a card-number I could copy straight to my clipboard. Whoever thought of that just saved me a click, and I'm grateful.

### Frontend (React)

The frontend is a responsive web-app build with [React](https://reactjs.org/). It seems like React is still the dominant technology is the area, although I've yet to try its main competitors like [Vue](https://vuejs.org/) or [Svelte](https://svelte.dev/).

I used [TailWindCSS](https://tailwindcss.com/) for styling, and prefer to anything I've tried in the past (Boostrap CSS, Semantic UI and just vanilla CSS).

I then used [Gatsby](https://www.gatsbyjs.com/) to optimize the static site rendering — but I'm not sure if the extra steps are worth it at this stage. It's better for SEO and performance, but costs extra development cycles.

Overall though, I was quite satisfied with this stack for the frontend, and would be happy to use it for production.

### Backend API

The backend is a serverless REST API implemented in Python and hosted as [Lambda functions](https://aws.amazon.com/lambda/) behind API Gateway.

My main challenge here was to abstract away the lower level things (like CORS, HTTP response formatting, database access) as much as possible. I did this via [Lambda layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html), which allowed me to group a bunch of Python packages and common scripts together.

This allowed me to implement handlers that are quite short and readable, which is think is key to maintainability.

### Serverless architecture

Why serverless? I think for a lot of businesses it simply wins out from a cost and scaling perspective. I could probably serve north of 500k API requests for [less than a dollar](https://aws.amazon.com/lambda/pricing/).

However, this implies that the choice of database must be serverless as well. I chose [DynamoDB](https://aws.amazon.com/dynamodb/) just for the ease of integration. But if I had different data modeling requires (for which the DynamoDB architecture might be unfit), I might look into [Aurora](https://aws.amazon.com/rds/aurora/) or [Fauna](https://fauna.com/).

### Infrastructure as code

Configuring infrastructure is time-consuming and error prone. If I want to be able to deploy a copy of this service quickly, I'd have to [model it as code (IaC)](https://en.wikipedia.org/wiki/Infrastructure_as_code). In keeping theme with my AWS integration so far, I've modeled this project with [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/home.html) in Typescript.

With this the entire frontend and backend can be deployed to a brand new account or domain in less than 30 minutes with just a [few configuration changes](https://github.com/pixegami/saas-starter/blob/master/saas-infrastructure/service.config.json).

### CRUD operations

Finally, I've added some simple Twitter-like posting capabilities to the project just as a stub for the actual business logic. It has ways to interact with the authentication API, and find out whether a user is verified, and if they are a paying subscriber.

## Closing Thoughts

Honestly, I'm so tired of this project already. It was a lot more complex than I expected — especially for an app that really doesn't do _anything_! But I did learn a lot along the way though, and will probably be faster the second time around.

My top three takeaways are:

- Don't build your own auth.
- You'll probably rebuild the project at least once or twice, so design things to be flexible.
- Having integration tests really paid off.
`
  },
  {
    title: "Started with AWS 3",
    subtitle: "Delete an AWS account and set up CLI/SDK access. extended",
    date: "2020-12-3",
    tags: [6,5,4],
    content: `
__Zstandard__, or \`zstd\` as short version, is a fast lossless compression algorithm,
targeting real-time compression scenarios at zlib-level and better compression ratios.
It's backed by a very fast entropy stage, provided by [Huff0 and FSE library](https://github.com/Cyan4973/FiniteStateEntropy).

Zstandard's format is stable and documented in [RFC8878](https://datatracker.ietf.org/doc/html/rfc8878). Multiple independent implementations are already available.
This repository represents the reference implementation, provided as an open-source dual [BSD](LICENSE) OR [GPLv2](COPYING) licensed **C** library,
and a command line utility producing and decoding \`.zst\`, \`.gz\`, \`.xz\` and \`.lz4\` files.
Should your project require another programming language,
a list of known ports and bindings is provided on [Zstandard homepage](https://facebook.github.io/zstd/#other-languages).

**Development branch status:**

[![Build Status][travisDevBadge]][travisLink]
[![Build status][CircleDevBadge]][CircleLink]
[![Build status][CirrusDevBadge]][CirrusLink]
[![Fuzzing Status][OSSFuzzBadge]][OSSFuzzLink]

[travisDevBadge]: https://api.travis-ci.com/facebook/zstd.svg?branch=dev "Continuous Integration test suite"
[travisLink]: https://travis-ci.com/facebook/zstd
[CircleDevBadge]: https://circleci.com/gh/facebook/zstd/tree/dev.svg?style=shield "Short test suite"
[CircleLink]: https://circleci.com/gh/facebook/zstd
[CirrusDevBadge]: https://api.cirrus-ci.com/github/facebook/zstd.svg?branch=dev
[CirrusLink]: https://cirrus-ci.com/github/facebook/zstd
[OSSFuzzBadge]: https://oss-fuzz-build-logs.storage.googleapis.com/badges/zstd.svg
[OSSFuzzLink]: https://bugs.chromium.org/p/oss-fuzz/issues/list?sort=-opened&can=1&q=proj:zstd

## Benchmarks

For reference, several fast compression algorithms were tested and compared
on a desktop running Ubuntu 20.04 (\`Linux 5.11.0-41-generic\`),
with a Core i7-9700K CPU @ 4.9GHz,
using [lzbench], an open-source in-memory benchmark by @inikep
compiled with [gcc] 9.3.0,
on the [Silesia compression corpus].

[lzbench]: https://github.com/inikep/lzbench
[Silesia compression corpus]: https://sun.aei.polsl.pl//~sdeor/index.php?page=silesia
[gcc]: https://gcc.gnu.org/

| Compressor name         | Ratio | Compression| Decompress.|
| ---------------         | ------| -----------| ---------- |
| **zstd 1.5.1 -1**       | 2.887 |   530 MB/s |  1700 MB/s |
| [zlib] 1.2.11 -1        | 2.743 |    95 MB/s |   400 MB/s |
| brotli 1.0.9 -0         | 2.702 |   395 MB/s |   450 MB/s |
| **zstd 1.5.1 --fast=1** | 2.437 |   600 MB/s |  2150 MB/s |
| **zstd 1.5.1 --fast=3** | 2.239 |   670 MB/s |  2250 MB/s |
| quicklz 1.5.0 -1        | 2.238 |   540 MB/s |   760 MB/s |
| **zstd 1.5.1 --fast=4** | 2.148 |   710 MB/s |  2300 MB/s |
| lzo1x 2.10 -1           | 2.106 |   660 MB/s |   845 MB/s |
| [lz4] 1.9.3             | 2.101 |   740 MB/s |  4500 MB/s |
| lzf 3.6 -1              | 2.077 |   410 MB/s |   830 MB/s |
| snappy 1.1.9            | 2.073 |   550 MB/s |  1750 MB/s |

[zlib]: https://www.zlib.net/
[lz4]: https://lz4.github.io/lz4/

The negative compression levels, specified with \`--fast=#\`,
offer faster compression and decompression speed
at the cost of compression ratio (compared to level 1).

Zstd can also offer stronger compression ratios at the cost of compression speed.
Speed vs Compression trade-off is configurable by small increments.
Decompression speed is preserved and remains roughly the same at all settings,
a property shared by most LZ compression algorithms, such as [zlib] or lzma.

The following tests were run
on a server running Linux Debian (\`Linux version 4.14.0-3-amd64\`)
with a Core i7-6700K CPU @ 4.0GHz,
using [lzbench], an open-source in-memory benchmark by @inikep
compiled with [gcc] 7.3.0,
on the [Silesia compression corpus].

Compression Speed vs Ratio | Decompression Speed
---------------------------|--------------------
![Compression Speed vs Ratio](https://placehold.co/600x400/EEE/31343C "Compression Speed vs Ratio") | ![Decompression Speed](https://placehold.co/600x400/EEE/31343C "Decompression Speed")

A few other algorithms can produce higher compression ratios at slower speeds, falling outside of the graph.
For a larger picture including slow modes, [click on this link](https://placehold.co/600x400/EEE/31343C).


## The case for Small Data compression

Previous charts provide results applicable to typical file and stream scenarios (several MB). Small data comes with different perspectives.

The smaller the amount of data to compress, the more difficult it is to compress. This problem is common to all compression algorithms, and reason is, compression algorithms learn from past data how to compress future data. But at the beginning of a new data set, there is no "past" to build upon.

To solve this situation, Zstd offers a __training mode__, which can be used to tune the algorithm for a selected type of data.
Training Zstandard is achieved by providing it with a few samples (one file per sample). The result of this training is stored in a file called "dictionary", which must be loaded before compression and decompression.
Using this dictionary, the compression ratio achievable on small data improves dramatically.

The following example uses the \`github-users\` [sample set](https://github.com/facebook/zstd/releases/tag/v1.1.3), created from [github public API](https://developer.github.com/v3/users/#get-all-users).
It consists of roughly 10K records weighing about 1KB each.

Compression Ratio | Compression Speed | Decompression Speed
------------------|-------------------|--------------------
![Compression Ratio](https://placehold.co/600x400/EEE/31343C "Compression Ratio") | ![Compression Speed](https://placehold.co/600x400/EEE/31343C "Compression Speed") | ![Decompression Speed](https://placehold.co/600x400/EEE/31343C "Decompression Speed")


These compression gains are achieved while simultaneously providing _faster_ compression and decompression speeds.

Training works if there is some correlation in a family of small data samples. The more data-specific a dictionary is, the more efficient it is (there is no _universal dictionary_).
Hence, deploying one dictionary per type of data will provide the greatest benefits.
Dictionary gains are mostly effective in the first few KB. Then, the compression algorithm will gradually use previously decoded content to better compress the rest of the file.

### Dictionary compression How To:

1. Create the dictionary

    \`zstd --train FullPathToTrainingSet/* -o dictionaryName\`

2. Compress with dictionary

    \`zstd -D dictionaryName FILE\`

3. Decompress with dictionary

    \`zstd -D dictionaryName --decompress FILE.zst\`


## Build instructions

\`make\` is the officially maintained build system of this project.
All other build systems are "compatible" and 3rd-party maintained,
they may feature small differences in advanced options.
When your system allows it, prefer using \`make\` to build \`zstd\` and \`libzstd\`.

### Makefile

If your system is compatible with standard \`make\` (or \`gmake\`),
invoking \`make\` in root directory will generate \`zstd\` cli in root directory.
It will also create \`libzstd\` into \`lib/\`.

Other available options include:
- \`make install\` : create and install zstd cli, library and man pages
- \`make check\` : create and run \`zstd\`, test its behavior on local platform

The \`Makefile\` follows the [GNU Standard Makefile conventions](https://www.gnu.org/prep/standards/html_node/Makefile-Conventions.html),
allowing staged install, standard flags, directory variables and command variables.

For advanced use cases, specialized compilation flags which control binary generation
are documented in [\`lib/README.md\`](lib/README.md#modular-build) for the \`libzstd\` library
and in [\`programs/README.md\`](programs/README.md#compilation-variables) for the \`zstd\` CLI.

### cmake

A \`cmake\` project generator is provided within \`build/cmake\`.
It can generate Makefiles or other build scripts
to create \`zstd\` binary, and \`libzstd\` dynamic and static libraries.

By default, \`CMAKE_BUILD_TYPE\` is set to \`Release\`.

#### Support for Fat (Universal2) Output

\`zstd\` can be built and installed with support for both Apple Silicon (M1/M2) as well as Intel by using CMake's Universal2 support.
To perform a Fat/Universal2 build and install use the following commands:

\`\`\`bash
cmake -B build-cmake-debug -S build/cmake -G Ninja -DCMAKE_OSX_ARCHITECTURES="x86_64;x86_64h;arm64"
cd build-cmake-debug
ninja
sudo ninja install
\`\`\`

### Meson

A Meson project is provided within [\`build/meson\`](build/meson). Follow
build instructions in that directory.

You can also take a look at [\`.travis.yml\`](.travis.yml) file for an
example about how Meson is used to build this project.

Note that default build type is **release**.

### VCPKG
You can build and install zstd [vcpkg](https://github.com/Microsoft/vcpkg/) dependency manager:

    git clone https://github.com/Microsoft/vcpkg.git
    cd vcpkg
    ./bootstrap-vcpkg.sh
    ./vcpkg integrate install
    ./vcpkg install zstd

The zstd port in vcpkg is kept up to date by Microsoft team members and community contributors.
If the version is out of date, please [create an issue or pull request](https://github.com/Microsoft/vcpkg) on the vcpkg repository.

### Visual Studio (Windows)

Going into \`build\` directory, you will find additional possibilities:
- Projects for Visual Studio 2005, 2008 and 2010.
  + VS2010 project is compatible with VS2012, VS2013, VS2015 and VS2017.
- Automated build scripts for Visual compiler by [@KrzysFR](https://github.com/KrzysFR), in \`build/VS_scripts\`,
  which will build \`zstd\` cli and \`libzstd\` library without any need to open Visual Studio solution.

### Buck

You can build the zstd binary via buck by executing: \`buck build programs:zstd\` from the root of the repo.
The output binary will be in \`buck-out/gen/programs/\`.

### Bazel

You easily can integrate zstd into your Bazel project by using the module hosted on the [Bazel Central Repository](https://registry.bazel.build/modules/zstd).

## Testing

You can run quick local smoke tests by running \`make check\`.
If you can't use \`make\`, execute the \`playTest.sh\` script from the \`src/tests\` directory.
Two env variables \`$ZSTD_BIN\` and \`$DATAGEN_BIN\` are needed for the test script to locate the \`zstd\` and \`datagen\` binary.
For information on CI testing, please refer to \`TESTING.md\`.

## Status

Zstandard is currently deployed within Facebook and many other large cloud infrastructures.
It is run continuously to compress large amounts of data in multiple formats and use cases.
Zstandard is considered safe for production environments.

## License

Zstandard is dual-licensed under [BSD](LICENSE) OR [GPLv2](COPYING).

## Contributing

The \`dev\` branch is the one where all contributions are merged before reaching \`release\`.
If you plan to propose a patch, please commit into the \`dev\` branch, or its own feature branch.
Direct commit to \`release\` are not permitted.
For more information, please read [CONTRIBUTING](CONTRIBUTING.md).
`
  },
  {    
  title: "Getting Started with AWS 4",
  subtitle: "Create an AWS account and set up CLI/SDK access. the first one",
  date: "2020-12-4",
  tags: [1,2,4],
  content: `
"Cloud computing" plays a vital role in the creation of software products and services. It's also one of the most highly sought-after skills in the tech industry.

In fact, most of the projects on this site will require cloud interaction of some sort—particularly with AWS's serverless products.

## Getting Started

> To use AWS in these projects, we'll need to set up an account, the CLI, and the SDK.

### Create an account

If you don't already have an account then [sign up here](https://portal.aws.amazon.com/billing/signup#/start).

Once you are signed up, you should be able to log in to the [AWS Console](https://aws.amazon.com/console/). It might look overwhelming if you're seeing for the first time.

### Install the CLI

The AWS CLI is a command-line application that lets you interact with your AWS account from the terminal. It's available on all platforms.

If you are a proficient Python user, you can just install it with pip.

bash
pip install awscli


Otherwise, check out the [official instructions](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html).

Once installed, you should be able to run this command from the terminal to see its version.

bash
aws --version


### Create an IAM user

The CLI will access your AWS account via an "IAM user." You can create one from the **Users** page in your [IAM console](https://console.aws.amazon.com/iam).

Once the user is created, you'll need to generate access keys (passwords, essentially) for it.

* [Creating an Admin IAM User](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html)
* [Creating access keys for a user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)

Your access keys should look something like this:


Access key ID: AKIAIOSFODNN7EXAMPLE
Secret access key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY



### Configure the CLI

Next you need to [configure the CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html) so that it can access your AWS account via the IAM user.

Basically, just run this command and paste in your access keys.

bash
aws configure


Additionally, you'll also be asked for a [default region](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-region) and [default output format](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-format).

You may leave them empty—but generally I like to use:


Default region name [None]: us-east-1
Default output format [None]: json


### Configuration files

Once configured, the AWS CLI [saves the credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html) and region/format profiles to your computer. They are typically in these locations:


~/.aws/credentials
~/.aws/config


You can open them up and edit them if you like or just run aws configure again to change them.

### Test the CLI!

Now you should be able to use your CLI to access AWS. For example, I should be able to see the S3 buckets I have in us-east-1:

bash
aws s3 ls

2020-12-09 22:36:32 blog.pixegami.com
2020-12-27 00:04:52 cloud-archiver.5dac84a54677.archivetest


Generally, everything that can be done in the console can also be done in the CLI. Check out the [full reference guide here](https://docs.aws.amazon.com/cli/latest/index.html).

### AWS SDK

Finally, to use AWS directly from your application code, you need to download the [SDK](https://aws.amazon.com/tools/) for the language you work with.

The SDKs can be configured in different ways as well, but by default it usually uses the same profiles and credentials stored by your aws configure.


### That's it! 

You're all set to start using AWS.

## Why AWS?

When we bring "the cloud" into a project, it's usually because there's some capability we'd like to add.

* Hosting for a website or service.
* File or data storage.
* On-demand computation.
* Authentication.

And there's many viable solutions to choose from—[Azure](https://azure.microsoft.com/en-au/), [Google Cloud](https://cloud.google.com), [Firebase](https://firebase.google.com), [Digital Ocean](https://try.digitalocean.com).

So why could you choose [AWS](https://aws.amazon.com/what-is-aws/) over any of these alternatives? From a new user's perspective:

* **Largest marketshare (at 30%)** which roughly translates to lots of community resources and job opportunities.

* **Most services available (175+)** which means more tools at your disposal, well-integrated under one umbrella.

On the flip-side, the biggest drawback is its upfront complexity.

Personally though, the reason I use AWS is because it's the technology I'm most familiar with.


## Why Serverless?

**It's cheaper.** Most cloud "getting started" guides will show you how to spin up a server—a mercenary rented computer that stays online  24/7 to do your bidding.

But for most of my projects, I'm going utilize technology that doesn't require a hosted server. In particular:

| Service | Purpose |
| --- | --- |
| S3 | File storage |
| DynamoDB | Database |
| Lambda | Compute engine |

Their on-demand pricing means the cost scales with usage. There is a [free tier](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc), and it only begins to cost money if usage exceeds a certain amount.

For small projects with light traffic, this usually translates to monthly costs of **less than a dollar** (if not completely free).

In comparison, the price of hosting a server typically starts at **$5.00 per month**.

## Continue Learning

* [Official documentation](https://aws.amazon.com/getting-started/)
* [Free YouTube videos](https://www.youtube.com/watch?v=ubCNZRNjhyo)
* [Udemy Courses](https://www.udemy.com/course/aws-certified-developer-associate/)
`
  },
  {
    title: "Started with AWS 5",
    subtitle: "Delete an AWS account and set up CLI/SDK access. not extended",
    date: "2020-12-5",
    tags: [5,1,3],
    content: `
The [SaaS (software as a service)](https://en.wikipedia.org/wiki/Software_as_a_service) model underpins many of today's successful new businesses. Knowing how to build one from start to finish is probably a useful addition to any software developer's skill set.

But even when you strip a SaaS product of its business logic, there's still a non-trivial amount of work and trade-offs to consider.

In this project, my goal was to build a fully serverless SaaS web-app with authentication and payments — the two vital organs of any business.

My implementation is opinionated (as you'll see), and intended to serve as a starting point for new SaaS ideas in the future. Here's what's included:

- [Authentication](#authentication)
- [Payments (Stripe)](#payments-stripe)
- [Frontend (React)](#frontend-react)
- [Backend API](#backend-api)
- [Serverless architecture](#serverless-architecture)
- [Infrastructure as code](#infrastructure-as-code)
- [CRUD operations](#crud-operations)
- [Lessons Learnt](#lessons-learnt)

You can view the example at https://saas-starter-stack.com/app/ and the source on [GitHub](https://github.com/pixegami/saas-starter). In this post, I'll be reflecting on my choices and experience for each of the above features.

### Authentication

**Don't roll your own auth!** It's hard, and mistakes can be devastating to a business. With that said, I did it anyway — mostly to learn from it. Here's also some [discussion on Hackernews](https://news.ycombinator.com/item?id=22001918) on why you might want to build your own auth.

I used [bcrypt](https://codahale.com/how-to-safely-store-a-password/) and [JSON Web Tokens](https://jwt.io/), and stored credentials on DynamoDB. That part wasn't so bad. The real grind came from building things like exponential back-offs for failed attempts, account verification and reset mechanisms, and patching all the security edge cases.

I got it to a roughly working state, and then called it a day. If this was a production system, I'd probably look into something like [Cognito](https://aws.amazon.com/cognito/), [Firebase](https://firebase.google.com/products/auth) or [Okta](https://www.okta.com/).

### Payments (Stripe)

From payments integration, [Stripe](https://stripe.com) was an easy choice. No prominent alternative come to mind, and I've heard high praises about Stripe's developer onboarding experience.

I set up [subscription payment](https://stripe.com/en-au/billing) integration with the project, and I think the developer experience lives up to expectations. The tutorials were well structured and concise.

But the little thing that impressed me the most was when I typed in 'test card' in a [search box](https://stripe.com/docs/testing), it actually just straight up gave me a card-number I could copy straight to my clipboard. Whoever thought of that just saved me a click, and I'm grateful.

### Frontend (React)

The frontend is a responsive web-app build with [React](https://reactjs.org/). It seems like React is still the dominant technology is the area, although I've yet to try its main competitors like [Vue](https://vuejs.org/) or [Svelte](https://svelte.dev/).

I used [TailWindCSS](https://tailwindcss.com/) for styling, and prefer to anything I've tried in the past (Boostrap CSS, Semantic UI and just vanilla CSS).

I then used [Gatsby](https://www.gatsbyjs.com/) to optimize the static site rendering — but I'm not sure if the extra steps are worth it at this stage. It's better for SEO and performance, but costs extra development cycles.

Overall though, I was quite satisfied with this stack for the frontend, and would be happy to use it for production.

### Backend API

The backend is a serverless REST API implemented in Python and hosted as [Lambda functions](https://aws.amazon.com/lambda/) behind API Gateway.

My main challenge here was to abstract away the lower level things (like CORS, HTTP response formatting, database access) as much as possible. I did this via [Lambda layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html), which allowed me to group a bunch of Python packages and common scripts together.

This allowed me to implement handlers that are quite short and readable, which is think is key to maintainability.

### Serverless architecture

Why serverless? I think for a lot of businesses it simply wins out from a cost and scaling perspective. I could probably serve north of 500k API requests for [less than a dollar](https://aws.amazon.com/lambda/pricing/).

However, this implies that the choice of database must be serverless as well. I chose [DynamoDB](https://aws.amazon.com/dynamodb/) just for the ease of integration. But if I had different data modeling requires (for which the DynamoDB architecture might be unfit), I might look into [Aurora](https://aws.amazon.com/rds/aurora/) or [Fauna](https://fauna.com/).

### Infrastructure as code

Configuring infrastructure is time-consuming and error prone. If I want to be able to deploy a copy of this service quickly, I'd have to [model it as code (IaC)](https://en.wikipedia.org/wiki/Infrastructure_as_code). In keeping theme with my AWS integration so far, I've modeled this project with [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/home.html) in Typescript.

With this the entire frontend and backend can be deployed to a brand new account or domain in less than 30 minutes with just a [few configuration changes](https://github.com/pixegami/saas-starter/blob/master/saas-infrastructure/service.config.json).

### CRUD operations

Finally, I've added some simple Twitter-like posting capabilities to the project just as a stub for the actual business logic. It has ways to interact with the authentication API, and find out whether a user is verified, and if they are a paying subscriber.

## Closing Thoughts

Honestly, I'm so tired of this project already. It was a lot more complex than I expected — especially for an app that really doesn't do _anything_! But I did learn a lot along the way though, and will probably be faster the second time around.

My top three takeaways are:

- Don't build your own auth.
- You'll probably rebuild the project at least once or twice, so design things to be flexible.
- Having integration tests really paid off.
`
  },
  {
    title: "Started with AWS 6",
    subtitle: "Delete an AWS account and set up CLI/SDK access. extended",
    date: "2020-12-6",
    tags: [6,5,4],
    content: `
__Zstandard__, or \`zstd\` as short version, is a fast lossless compression algorithm,
targeting real-time compression scenarios at zlib-level and better compression ratios.
It's backed by a very fast entropy stage, provided by [Huff0 and FSE library](https://github.com/Cyan4973/FiniteStateEntropy).

Zstandard's format is stable and documented in [RFC8878](https://datatracker.ietf.org/doc/html/rfc8878). Multiple independent implementations are already available.
This repository represents the reference implementation, provided as an open-source dual [BSD](LICENSE) OR [GPLv2](COPYING) licensed **C** library,
and a command line utility producing and decoding \`.zst\`, \`.gz\`, \`.xz\` and \`.lz4\` files.
Should your project require another programming language,
a list of known ports and bindings is provided on [Zstandard homepage](https://facebook.github.io/zstd/#other-languages).

**Development branch status:**

[![Build Status][travisDevBadge]][travisLink]
[![Build status][CircleDevBadge]][CircleLink]
[![Build status][CirrusDevBadge]][CirrusLink]
[![Fuzzing Status][OSSFuzzBadge]][OSSFuzzLink]

[travisDevBadge]: https://api.travis-ci.com/facebook/zstd.svg?branch=dev "Continuous Integration test suite"
[travisLink]: https://travis-ci.com/facebook/zstd
[CircleDevBadge]: https://circleci.com/gh/facebook/zstd/tree/dev.svg?style=shield "Short test suite"
[CircleLink]: https://circleci.com/gh/facebook/zstd
[CirrusDevBadge]: https://api.cirrus-ci.com/github/facebook/zstd.svg?branch=dev
[CirrusLink]: https://cirrus-ci.com/github/facebook/zstd
[OSSFuzzBadge]: https://oss-fuzz-build-logs.storage.googleapis.com/badges/zstd.svg
[OSSFuzzLink]: https://bugs.chromium.org/p/oss-fuzz/issues/list?sort=-opened&can=1&q=proj:zstd

## Benchmarks

For reference, several fast compression algorithms were tested and compared
on a desktop running Ubuntu 20.04 (\`Linux 5.11.0-41-generic\`),
with a Core i7-9700K CPU @ 4.9GHz,
using [lzbench], an open-source in-memory benchmark by @inikep
compiled with [gcc] 9.3.0,
on the [Silesia compression corpus].

[lzbench]: https://github.com/inikep/lzbench
[Silesia compression corpus]: https://sun.aei.polsl.pl//~sdeor/index.php?page=silesia
[gcc]: https://gcc.gnu.org/

| Compressor name         | Ratio | Compression| Decompress.|
| ---------------         | ------| -----------| ---------- |
| **zstd 1.5.1 -1**       | 2.887 |   530 MB/s |  1700 MB/s |
| [zlib] 1.2.11 -1        | 2.743 |    95 MB/s |   400 MB/s |
| brotli 1.0.9 -0         | 2.702 |   395 MB/s |   450 MB/s |
| **zstd 1.5.1 --fast=1** | 2.437 |   600 MB/s |  2150 MB/s |
| **zstd 1.5.1 --fast=3** | 2.239 |   670 MB/s |  2250 MB/s |
| quicklz 1.5.0 -1        | 2.238 |   540 MB/s |   760 MB/s |
| **zstd 1.5.1 --fast=4** | 2.148 |   710 MB/s |  2300 MB/s |
| lzo1x 2.10 -1           | 2.106 |   660 MB/s |   845 MB/s |
| [lz4] 1.9.3             | 2.101 |   740 MB/s |  4500 MB/s |
| lzf 3.6 -1              | 2.077 |   410 MB/s |   830 MB/s |
| snappy 1.1.9            | 2.073 |   550 MB/s |  1750 MB/s |

[zlib]: https://www.zlib.net/
[lz4]: https://lz4.github.io/lz4/

The negative compression levels, specified with \`--fast=#\`,
offer faster compression and decompression speed
at the cost of compression ratio (compared to level 1).

Zstd can also offer stronger compression ratios at the cost of compression speed.
Speed vs Compression trade-off is configurable by small increments.
Decompression speed is preserved and remains roughly the same at all settings,
a property shared by most LZ compression algorithms, such as [zlib] or lzma.

The following tests were run
on a server running Linux Debian (\`Linux version 4.14.0-3-amd64\`)
with a Core i7-6700K CPU @ 4.0GHz,
using [lzbench], an open-source in-memory benchmark by @inikep
compiled with [gcc] 7.3.0,
on the [Silesia compression corpus].

Compression Speed vs Ratio | Decompression Speed
---------------------------|--------------------
![Compression Speed vs Ratio](https://placehold.co/600x400/EEE/31343C "Compression Speed vs Ratio") | ![Decompression Speed](https://placehold.co/600x400/EEE/31343C "Decompression Speed")

A few other algorithms can produce higher compression ratios at slower speeds, falling outside of the graph.
For a larger picture including slow modes, [click on this link](https://placehold.co/600x400/EEE/31343C).


## The case for Small Data compression

Previous charts provide results applicable to typical file and stream scenarios (several MB). Small data comes with different perspectives.

The smaller the amount of data to compress, the more difficult it is to compress. This problem is common to all compression algorithms, and reason is, compression algorithms learn from past data how to compress future data. But at the beginning of a new data set, there is no "past" to build upon.

To solve this situation, Zstd offers a __training mode__, which can be used to tune the algorithm for a selected type of data.
Training Zstandard is achieved by providing it with a few samples (one file per sample). The result of this training is stored in a file called "dictionary", which must be loaded before compression and decompression.
Using this dictionary, the compression ratio achievable on small data improves dramatically.

The following example uses the \`github-users\` [sample set](https://github.com/facebook/zstd/releases/tag/v1.1.3), created from [github public API](https://developer.github.com/v3/users/#get-all-users).
It consists of roughly 10K records weighing about 1KB each.

Compression Ratio | Compression Speed | Decompression Speed
------------------|-------------------|--------------------
![Compression Ratio](https://placehold.co/600x400/EEE/31343C "Compression Ratio") | ![Compression Speed](https://placehold.co/600x400/EEE/31343C "Compression Speed") | ![Decompression Speed](https://placehold.co/600x400/EEE/31343C "Decompression Speed")


These compression gains are achieved while simultaneously providing _faster_ compression and decompression speeds.

Training works if there is some correlation in a family of small data samples. The more data-specific a dictionary is, the more efficient it is (there is no _universal dictionary_).
Hence, deploying one dictionary per type of data will provide the greatest benefits.
Dictionary gains are mostly effective in the first few KB. Then, the compression algorithm will gradually use previously decoded content to better compress the rest of the file.

### Dictionary compression How To:

1. Create the dictionary

    \`zstd --train FullPathToTrainingSet/* -o dictionaryName\`

2. Compress with dictionary

    \`zstd -D dictionaryName FILE\`

3. Decompress with dictionary

    \`zstd -D dictionaryName --decompress FILE.zst\`


## Build instructions

\`make\` is the officially maintained build system of this project.
All other build systems are "compatible" and 3rd-party maintained,
they may feature small differences in advanced options.
When your system allows it, prefer using \`make\` to build \`zstd\` and \`libzstd\`.

### Makefile

If your system is compatible with standard \`make\` (or \`gmake\`),
invoking \`make\` in root directory will generate \`zstd\` cli in root directory.
It will also create \`libzstd\` into \`lib/\`.

Other available options include:
- \`make install\` : create and install zstd cli, library and man pages
- \`make check\` : create and run \`zstd\`, test its behavior on local platform

The \`Makefile\` follows the [GNU Standard Makefile conventions](https://www.gnu.org/prep/standards/html_node/Makefile-Conventions.html),
allowing staged install, standard flags, directory variables and command variables.

For advanced use cases, specialized compilation flags which control binary generation
are documented in [\`lib/README.md\`](lib/README.md#modular-build) for the \`libzstd\` library
and in [\`programs/README.md\`](programs/README.md#compilation-variables) for the \`zstd\` CLI.

### cmake

A \`cmake\` project generator is provided within \`build/cmake\`.
It can generate Makefiles or other build scripts
to create \`zstd\` binary, and \`libzstd\` dynamic and static libraries.

By default, \`CMAKE_BUILD_TYPE\` is set to \`Release\`.

#### Support for Fat (Universal2) Output

\`zstd\` can be built and installed with support for both Apple Silicon (M1/M2) as well as Intel by using CMake's Universal2 support.
To perform a Fat/Universal2 build and install use the following commands:

\`\`\`bash
cmake -B build-cmake-debug -S build/cmake -G Ninja -DCMAKE_OSX_ARCHITECTURES="x86_64;x86_64h;arm64"
cd build-cmake-debug
ninja
sudo ninja install
\`\`\`

### Meson

A Meson project is provided within [\`build/meson\`](build/meson). Follow
build instructions in that directory.

You can also take a look at [\`.travis.yml\`](.travis.yml) file for an
example about how Meson is used to build this project.

Note that default build type is **release**.

### VCPKG
You can build and install zstd [vcpkg](https://github.com/Microsoft/vcpkg/) dependency manager:

    git clone https://github.com/Microsoft/vcpkg.git
    cd vcpkg
    ./bootstrap-vcpkg.sh
    ./vcpkg integrate install
    ./vcpkg install zstd

The zstd port in vcpkg is kept up to date by Microsoft team members and community contributors.
If the version is out of date, please [create an issue or pull request](https://github.com/Microsoft/vcpkg) on the vcpkg repository.

### Visual Studio (Windows)

Going into \`build\` directory, you will find additional possibilities:
- Projects for Visual Studio 2005, 2008 and 2010.
  + VS2010 project is compatible with VS2012, VS2013, VS2015 and VS2017.
- Automated build scripts for Visual compiler by [@KrzysFR](https://github.com/KrzysFR), in \`build/VS_scripts\`,
  which will build \`zstd\` cli and \`libzstd\` library without any need to open Visual Studio solution.

### Buck

You can build the zstd binary via buck by executing: \`buck build programs:zstd\` from the root of the repo.
The output binary will be in \`buck-out/gen/programs/\`.

### Bazel

You easily can integrate zstd into your Bazel project by using the module hosted on the [Bazel Central Repository](https://registry.bazel.build/modules/zstd).

## Testing

You can run quick local smoke tests by running \`make check\`.
If you can't use \`make\`, execute the \`playTest.sh\` script from the \`src/tests\` directory.
Two env variables \`$ZSTD_BIN\` and \`$DATAGEN_BIN\` are needed for the test script to locate the \`zstd\` and \`datagen\` binary.
For information on CI testing, please refer to \`TESTING.md\`.

## Status

Zstandard is currently deployed within Facebook and many other large cloud infrastructures.
It is run continuously to compress large amounts of data in multiple formats and use cases.
Zstandard is considered safe for production environments.

## License

Zstandard is dual-licensed under [BSD](LICENSE) OR [GPLv2](COPYING).

## Contributing

The \`dev\` branch is the one where all contributions are merged before reaching \`release\`.
If you plan to propose a patch, please commit into the \`dev\` branch, or its own feature branch.
Direct commit to \`release\` are not permitted.
For more information, please read [CONTRIBUTING](CONTRIBUTING.md).
`
  },
  {    
  title: "Getting Started with AWS 7",
  subtitle: "Create an AWS account and set up CLI/SDK access. the first one",
  date: "2020-12-7",
  tags: [1,2,4],
  content: `
"Cloud computing" plays a vital role in the creation of software products and services. It's also one of the most highly sought-after skills in the tech industry.

In fact, most of the projects on this site will require cloud interaction of some sort—particularly with AWS's serverless products.

## Getting Started

> To use AWS in these projects, we'll need to set up an account, the CLI, and the SDK.

### Create an account

If you don't already have an account then [sign up here](https://portal.aws.amazon.com/billing/signup#/start).

Once you are signed up, you should be able to log in to the [AWS Console](https://aws.amazon.com/console/). It might look overwhelming if you're seeing for the first time.

### Install the CLI

The AWS CLI is a command-line application that lets you interact with your AWS account from the terminal. It's available on all platforms.

If you are a proficient Python user, you can just install it with pip.

bash
pip install awscli


Otherwise, check out the [official instructions](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html).

Once installed, you should be able to run this command from the terminal to see its version.

bash
aws --version


### Create an IAM user

The CLI will access your AWS account via an "IAM user." You can create one from the **Users** page in your [IAM console](https://console.aws.amazon.com/iam).

Once the user is created, you'll need to generate access keys (passwords, essentially) for it.

* [Creating an Admin IAM User](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html)
* [Creating access keys for a user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)

Your access keys should look something like this:


Access key ID: AKIAIOSFODNN7EXAMPLE
Secret access key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY



### Configure the CLI

Next you need to [configure the CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html) so that it can access your AWS account via the IAM user.

Basically, just run this command and paste in your access keys.

bash
aws configure


Additionally, you'll also be asked for a [default region](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-region) and [default output format](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-format).

You may leave them empty—but generally I like to use:


Default region name [None]: us-east-1
Default output format [None]: json


### Configuration files

Once configured, the AWS CLI [saves the credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html) and region/format profiles to your computer. They are typically in these locations:


~/.aws/credentials
~/.aws/config


You can open them up and edit them if you like or just run aws configure again to change them.

### Test the CLI!

Now you should be able to use your CLI to access AWS. For example, I should be able to see the S3 buckets I have in us-east-1:

bash
aws s3 ls

2020-12-09 22:36:32 blog.pixegami.com
2020-12-27 00:04:52 cloud-archiver.5dac84a54677.archivetest


Generally, everything that can be done in the console can also be done in the CLI. Check out the [full reference guide here](https://docs.aws.amazon.com/cli/latest/index.html).

### AWS SDK

Finally, to use AWS directly from your application code, you need to download the [SDK](https://aws.amazon.com/tools/) for the language you work with.

The SDKs can be configured in different ways as well, but by default it usually uses the same profiles and credentials stored by your aws configure.


### That's it! 

You're all set to start using AWS.

## Why AWS?

When we bring "the cloud" into a project, it's usually because there's some capability we'd like to add.

* Hosting for a website or service.
* File or data storage.
* On-demand computation.
* Authentication.

And there's many viable solutions to choose from—[Azure](https://azure.microsoft.com/en-au/), [Google Cloud](https://cloud.google.com), [Firebase](https://firebase.google.com), [Digital Ocean](https://try.digitalocean.com).

So why could you choose [AWS](https://aws.amazon.com/what-is-aws/) over any of these alternatives? From a new user's perspective:

* **Largest marketshare (at 30%)** which roughly translates to lots of community resources and job opportunities.

* **Most services available (175+)** which means more tools at your disposal, well-integrated under one umbrella.

On the flip-side, the biggest drawback is its upfront complexity.

Personally though, the reason I use AWS is because it's the technology I'm most familiar with.


## Why Serverless?

**It's cheaper.** Most cloud "getting started" guides will show you how to spin up a server—a mercenary rented computer that stays online  24/7 to do your bidding.

But for most of my projects, I'm going utilize technology that doesn't require a hosted server. In particular:

| Service | Purpose |
| --- | --- |
| S3 | File storage |
| DynamoDB | Database |
| Lambda | Compute engine |

Their on-demand pricing means the cost scales with usage. There is a [free tier](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc), and it only begins to cost money if usage exceeds a certain amount.

For small projects with light traffic, this usually translates to monthly costs of **less than a dollar** (if not completely free).

In comparison, the price of hosting a server typically starts at **$5.00 per month**.

## Continue Learning

* [Official documentation](https://aws.amazon.com/getting-started/)
* [Free YouTube videos](https://www.youtube.com/watch?v=ubCNZRNjhyo)
* [Udemy Courses](https://www.udemy.com/course/aws-certified-developer-associate/)
`
  },
  {
    title: "Started with AWS 8",
    subtitle: "Delete an AWS account and set up CLI/SDK access. not extended",
    date: "2020-12-8",
    tags: [5,1,3],
    content: `
The [SaaS (software as a service)](https://en.wikipedia.org/wiki/Software_as_a_service) model underpins many of today's successful new businesses. Knowing how to build one from start to finish is probably a useful addition to any software developer's skill set.

But even when you strip a SaaS product of its business logic, there's still a non-trivial amount of work and trade-offs to consider.

In this project, my goal was to build a fully serverless SaaS web-app with authentication and payments — the two vital organs of any business.

My implementation is opinionated (as you'll see), and intended to serve as a starting point for new SaaS ideas in the future. Here's what's included:

- [Authentication](#authentication)
- [Payments (Stripe)](#payments-stripe)
- [Frontend (React)](#frontend-react)
- [Backend API](#backend-api)
- [Serverless architecture](#serverless-architecture)
- [Infrastructure as code](#infrastructure-as-code)
- [CRUD operations](#crud-operations)
- [Lessons Learnt](#lessons-learnt)

You can view the example at https://saas-starter-stack.com/app/ and the source on [GitHub](https://github.com/pixegami/saas-starter). In this post, I'll be reflecting on my choices and experience for each of the above features.

### Authentication

**Don't roll your own auth!** It's hard, and mistakes can be devastating to a business. With that said, I did it anyway — mostly to learn from it. Here's also some [discussion on Hackernews](https://news.ycombinator.com/item?id=22001918) on why you might want to build your own auth.

I used [bcrypt](https://codahale.com/how-to-safely-store-a-password/) and [JSON Web Tokens](https://jwt.io/), and stored credentials on DynamoDB. That part wasn't so bad. The real grind came from building things like exponential back-offs for failed attempts, account verification and reset mechanisms, and patching all the security edge cases.

I got it to a roughly working state, and then called it a day. If this was a production system, I'd probably look into something like [Cognito](https://aws.amazon.com/cognito/), [Firebase](https://firebase.google.com/products/auth) or [Okta](https://www.okta.com/).

### Payments (Stripe)

From payments integration, [Stripe](https://stripe.com) was an easy choice. No prominent alternative come to mind, and I've heard high praises about Stripe's developer onboarding experience.

I set up [subscription payment](https://stripe.com/en-au/billing) integration with the project, and I think the developer experience lives up to expectations. The tutorials were well structured and concise.

But the little thing that impressed me the most was when I typed in 'test card' in a [search box](https://stripe.com/docs/testing), it actually just straight up gave me a card-number I could copy straight to my clipboard. Whoever thought of that just saved me a click, and I'm grateful.

### Frontend (React)

The frontend is a responsive web-app build with [React](https://reactjs.org/). It seems like React is still the dominant technology is the area, although I've yet to try its main competitors like [Vue](https://vuejs.org/) or [Svelte](https://svelte.dev/).

I used [TailWindCSS](https://tailwindcss.com/) for styling, and prefer to anything I've tried in the past (Boostrap CSS, Semantic UI and just vanilla CSS).

I then used [Gatsby](https://www.gatsbyjs.com/) to optimize the static site rendering — but I'm not sure if the extra steps are worth it at this stage. It's better for SEO and performance, but costs extra development cycles.

Overall though, I was quite satisfied with this stack for the frontend, and would be happy to use it for production.

### Backend API

The backend is a serverless REST API implemented in Python and hosted as [Lambda functions](https://aws.amazon.com/lambda/) behind API Gateway.

My main challenge here was to abstract away the lower level things (like CORS, HTTP response formatting, database access) as much as possible. I did this via [Lambda layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html), which allowed me to group a bunch of Python packages and common scripts together.

This allowed me to implement handlers that are quite short and readable, which is think is key to maintainability.

### Serverless architecture

Why serverless? I think for a lot of businesses it simply wins out from a cost and scaling perspective. I could probably serve north of 500k API requests for [less than a dollar](https://aws.amazon.com/lambda/pricing/).

However, this implies that the choice of database must be serverless as well. I chose [DynamoDB](https://aws.amazon.com/dynamodb/) just for the ease of integration. But if I had different data modeling requires (for which the DynamoDB architecture might be unfit), I might look into [Aurora](https://aws.amazon.com/rds/aurora/) or [Fauna](https://fauna.com/).

### Infrastructure as code

Configuring infrastructure is time-consuming and error prone. If I want to be able to deploy a copy of this service quickly, I'd have to [model it as code (IaC)](https://en.wikipedia.org/wiki/Infrastructure_as_code). In keeping theme with my AWS integration so far, I've modeled this project with [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/home.html) in Typescript.

With this the entire frontend and backend can be deployed to a brand new account or domain in less than 30 minutes with just a [few configuration changes](https://github.com/pixegami/saas-starter/blob/master/saas-infrastructure/service.config.json).

### CRUD operations

Finally, I've added some simple Twitter-like posting capabilities to the project just as a stub for the actual business logic. It has ways to interact with the authentication API, and find out whether a user is verified, and if they are a paying subscriber.

## Closing Thoughts

Honestly, I'm so tired of this project already. It was a lot more complex than I expected — especially for an app that really doesn't do _anything_! But I did learn a lot along the way though, and will probably be faster the second time around.

My top three takeaways are:

- Don't build your own auth.
- You'll probably rebuild the project at least once or twice, so design things to be flexible.
- Having integration tests really paid off.
`
  },
  {
    title: "Started with AWS 9",
    subtitle: "Delete an AWS account and set up CLI/SDK access. extended",
    date: "2020-12-9",
    tags: [6,5,4],
    content: `
__Zstandard__, or \`zstd\` as short version, is a fast lossless compression algorithm,
targeting real-time compression scenarios at zlib-level and better compression ratios.
It's backed by a very fast entropy stage, provided by [Huff0 and FSE library](https://github.com/Cyan4973/FiniteStateEntropy).

Zstandard's format is stable and documented in [RFC8878](https://datatracker.ietf.org/doc/html/rfc8878). Multiple independent implementations are already available.
This repository represents the reference implementation, provided as an open-source dual [BSD](LICENSE) OR [GPLv2](COPYING) licensed **C** library,
and a command line utility producing and decoding \`.zst\`, \`.gz\`, \`.xz\` and \`.lz4\` files.
Should your project require another programming language,
a list of known ports and bindings is provided on [Zstandard homepage](https://facebook.github.io/zstd/#other-languages).

**Development branch status:**

[![Build Status][travisDevBadge]][travisLink]
[![Build status][CircleDevBadge]][CircleLink]
[![Build status][CirrusDevBadge]][CirrusLink]
[![Fuzzing Status][OSSFuzzBadge]][OSSFuzzLink]

[travisDevBadge]: https://api.travis-ci.com/facebook/zstd.svg?branch=dev "Continuous Integration test suite"
[travisLink]: https://travis-ci.com/facebook/zstd
[CircleDevBadge]: https://circleci.com/gh/facebook/zstd/tree/dev.svg?style=shield "Short test suite"
[CircleLink]: https://circleci.com/gh/facebook/zstd
[CirrusDevBadge]: https://api.cirrus-ci.com/github/facebook/zstd.svg?branch=dev
[CirrusLink]: https://cirrus-ci.com/github/facebook/zstd
[OSSFuzzBadge]: https://oss-fuzz-build-logs.storage.googleapis.com/badges/zstd.svg
[OSSFuzzLink]: https://bugs.chromium.org/p/oss-fuzz/issues/list?sort=-opened&can=1&q=proj:zstd

## Benchmarks

For reference, several fast compression algorithms were tested and compared
on a desktop running Ubuntu 20.04 (\`Linux 5.11.0-41-generic\`),
with a Core i7-9700K CPU @ 4.9GHz,
using [lzbench], an open-source in-memory benchmark by @inikep
compiled with [gcc] 9.3.0,
on the [Silesia compression corpus].

[lzbench]: https://github.com/inikep/lzbench
[Silesia compression corpus]: https://sun.aei.polsl.pl//~sdeor/index.php?page=silesia
[gcc]: https://gcc.gnu.org/

| Compressor name         | Ratio | Compression| Decompress.|
| ---------------         | ------| -----------| ---------- |
| **zstd 1.5.1 -1**       | 2.887 |   530 MB/s |  1700 MB/s |
| [zlib] 1.2.11 -1        | 2.743 |    95 MB/s |   400 MB/s |
| brotli 1.0.9 -0         | 2.702 |   395 MB/s |   450 MB/s |
| **zstd 1.5.1 --fast=1** | 2.437 |   600 MB/s |  2150 MB/s |
| **zstd 1.5.1 --fast=3** | 2.239 |   670 MB/s |  2250 MB/s |
| quicklz 1.5.0 -1        | 2.238 |   540 MB/s |   760 MB/s |
| **zstd 1.5.1 --fast=4** | 2.148 |   710 MB/s |  2300 MB/s |
| lzo1x 2.10 -1           | 2.106 |   660 MB/s |   845 MB/s |
| [lz4] 1.9.3             | 2.101 |   740 MB/s |  4500 MB/s |
| lzf 3.6 -1              | 2.077 |   410 MB/s |   830 MB/s |
| snappy 1.1.9            | 2.073 |   550 MB/s |  1750 MB/s |

[zlib]: https://www.zlib.net/
[lz4]: https://lz4.github.io/lz4/

The negative compression levels, specified with \`--fast=#\`,
offer faster compression and decompression speed
at the cost of compression ratio (compared to level 1).

Zstd can also offer stronger compression ratios at the cost of compression speed.
Speed vs Compression trade-off is configurable by small increments.
Decompression speed is preserved and remains roughly the same at all settings,
a property shared by most LZ compression algorithms, such as [zlib] or lzma.

The following tests were run
on a server running Linux Debian (\`Linux version 4.14.0-3-amd64\`)
with a Core i7-6700K CPU @ 4.0GHz,
using [lzbench], an open-source in-memory benchmark by @inikep
compiled with [gcc] 7.3.0,
on the [Silesia compression corpus].

Compression Speed vs Ratio | Decompression Speed
---------------------------|--------------------
![Compression Speed vs Ratio](https://placehold.co/600x400/EEE/31343C "Compression Speed vs Ratio") | ![Decompression Speed](https://placehold.co/600x400/EEE/31343C "Decompression Speed")

A few other algorithms can produce higher compression ratios at slower speeds, falling outside of the graph.
For a larger picture including slow modes, [click on this link](https://placehold.co/600x400/EEE/31343C).


## The case for Small Data compression

Previous charts provide results applicable to typical file and stream scenarios (several MB). Small data comes with different perspectives.

The smaller the amount of data to compress, the more difficult it is to compress. This problem is common to all compression algorithms, and reason is, compression algorithms learn from past data how to compress future data. But at the beginning of a new data set, there is no "past" to build upon.

To solve this situation, Zstd offers a __training mode__, which can be used to tune the algorithm for a selected type of data.
Training Zstandard is achieved by providing it with a few samples (one file per sample). The result of this training is stored in a file called "dictionary", which must be loaded before compression and decompression.
Using this dictionary, the compression ratio achievable on small data improves dramatically.

The following example uses the \`github-users\` [sample set](https://github.com/facebook/zstd/releases/tag/v1.1.3), created from [github public API](https://developer.github.com/v3/users/#get-all-users).
It consists of roughly 10K records weighing about 1KB each.

Compression Ratio | Compression Speed | Decompression Speed
------------------|-------------------|--------------------
![Compression Ratio](https://placehold.co/600x400/EEE/31343C "Compression Ratio") | ![Compression Speed](https://placehold.co/600x400/EEE/31343C "Compression Speed") | ![Decompression Speed](https://placehold.co/600x400/EEE/31343C "Decompression Speed")


These compression gains are achieved while simultaneously providing _faster_ compression and decompression speeds.

Training works if there is some correlation in a family of small data samples. The more data-specific a dictionary is, the more efficient it is (there is no _universal dictionary_).
Hence, deploying one dictionary per type of data will provide the greatest benefits.
Dictionary gains are mostly effective in the first few KB. Then, the compression algorithm will gradually use previously decoded content to better compress the rest of the file.

### Dictionary compression How To:

1. Create the dictionary

    \`zstd --train FullPathToTrainingSet/* -o dictionaryName\`

2. Compress with dictionary

    \`zstd -D dictionaryName FILE\`

3. Decompress with dictionary

    \`zstd -D dictionaryName --decompress FILE.zst\`


## Build instructions

\`make\` is the officially maintained build system of this project.
All other build systems are "compatible" and 3rd-party maintained,
they may feature small differences in advanced options.
When your system allows it, prefer using \`make\` to build \`zstd\` and \`libzstd\`.

### Makefile

If your system is compatible with standard \`make\` (or \`gmake\`),
invoking \`make\` in root directory will generate \`zstd\` cli in root directory.
It will also create \`libzstd\` into \`lib/\`.

Other available options include:
- \`make install\` : create and install zstd cli, library and man pages
- \`make check\` : create and run \`zstd\`, test its behavior on local platform

The \`Makefile\` follows the [GNU Standard Makefile conventions](https://www.gnu.org/prep/standards/html_node/Makefile-Conventions.html),
allowing staged install, standard flags, directory variables and command variables.

For advanced use cases, specialized compilation flags which control binary generation
are documented in [\`lib/README.md\`](lib/README.md#modular-build) for the \`libzstd\` library
and in [\`programs/README.md\`](programs/README.md#compilation-variables) for the \`zstd\` CLI.

### cmake

A \`cmake\` project generator is provided within \`build/cmake\`.
It can generate Makefiles or other build scripts
to create \`zstd\` binary, and \`libzstd\` dynamic and static libraries.

By default, \`CMAKE_BUILD_TYPE\` is set to \`Release\`.

#### Support for Fat (Universal2) Output

\`zstd\` can be built and installed with support for both Apple Silicon (M1/M2) as well as Intel by using CMake's Universal2 support.
To perform a Fat/Universal2 build and install use the following commands:

\`\`\`bash
cmake -B build-cmake-debug -S build/cmake -G Ninja -DCMAKE_OSX_ARCHITECTURES="x86_64;x86_64h;arm64"
cd build-cmake-debug
ninja
sudo ninja install
\`\`\`

### Meson

A Meson project is provided within [\`build/meson\`](build/meson). Follow
build instructions in that directory.

You can also take a look at [\`.travis.yml\`](.travis.yml) file for an
example about how Meson is used to build this project.

Note that default build type is **release**.

### VCPKG
You can build and install zstd [vcpkg](https://github.com/Microsoft/vcpkg/) dependency manager:

    git clone https://github.com/Microsoft/vcpkg.git
    cd vcpkg
    ./bootstrap-vcpkg.sh
    ./vcpkg integrate install
    ./vcpkg install zstd

The zstd port in vcpkg is kept up to date by Microsoft team members and community contributors.
If the version is out of date, please [create an issue or pull request](https://github.com/Microsoft/vcpkg) on the vcpkg repository.

### Visual Studio (Windows)

Going into \`build\` directory, you will find additional possibilities:
- Projects for Visual Studio 2005, 2008 and 2010.
  + VS2010 project is compatible with VS2012, VS2013, VS2015 and VS2017.
- Automated build scripts for Visual compiler by [@KrzysFR](https://github.com/KrzysFR), in \`build/VS_scripts\`,
  which will build \`zstd\` cli and \`libzstd\` library without any need to open Visual Studio solution.

### Buck

You can build the zstd binary via buck by executing: \`buck build programs:zstd\` from the root of the repo.
The output binary will be in \`buck-out/gen/programs/\`.

### Bazel

You easily can integrate zstd into your Bazel project by using the module hosted on the [Bazel Central Repository](https://registry.bazel.build/modules/zstd).

## Testing

You can run quick local smoke tests by running \`make check\`.
If you can't use \`make\`, execute the \`playTest.sh\` script from the \`src/tests\` directory.
Two env variables \`$ZSTD_BIN\` and \`$DATAGEN_BIN\` are needed for the test script to locate the \`zstd\` and \`datagen\` binary.
For information on CI testing, please refer to \`TESTING.md\`.

## Status

Zstandard is currently deployed within Facebook and many other large cloud infrastructures.
It is run continuously to compress large amounts of data in multiple formats and use cases.
Zstandard is considered safe for production environments.

## License

Zstandard is dual-licensed under [BSD](LICENSE) OR [GPLv2](COPYING).

## Contributing

The \`dev\` branch is the one where all contributions are merged before reaching \`release\`.
If you plan to propose a patch, please commit into the \`dev\` branch, or its own feature branch.
Direct commit to \`release\` are not permitted.
For more information, please read [CONTRIBUTING](CONTRIBUTING.md).
`
  },
]

const tags = [
  {
    color: '#eee061',
    name: 'JavaScript',
  },
  {
    color: '#3493f3',
    name: 'CSS',
  },
  {
    color: '#00d5fc',
    name: 'React',
  },
  {
    color: '#ffffff',
    name: 'Next.JS',
  },
  {
    color: '#00bdc9',
    name: 'Tailwind',
  },
  {
    color: '#c184ed',
    name: 'VSCode',
  },
]

module.exports = {
  tags,
  blogs
}