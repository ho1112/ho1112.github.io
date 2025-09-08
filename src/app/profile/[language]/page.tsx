'use client'

import { useTheme } from 'next-themes'
import { useState } from 'react'
import ItsMeWidgetLoader from '@/components/common/ItsMeWidget'
import IconGithub from '@/components/icon/Github'
import IconLinkedin from '@/components/icon/LinkedIn'

export default function ProfilePage({
  params,
}: {
  params: { language: 'ko' | 'ja' }
}) {
  const { resolvedTheme } = useTheme()
  const theme = resolvedTheme === 'dark' ? 'dark' : 'light'
  const language = params.language
  const [showJavaProjects, setShowJavaProjects] = useState(false)

  const TECH_STACK = {
    // 프론트엔드
    NEXTJS: 'Next.js',
    TYPESCRIPT: 'TypeScript',
    REACT: 'React',
    JAVASCRIPT: 'JavaScript',
    VUE: 'Vue.js',
    SCSS: 'SCSS',
    TAILWIND: 'Tailwind CSS',
    STYLED_COMPONENTS: 'Styled Components',
    WEB_COMPONENTS: 'Web Components',
    LIT: 'Lit',
    JQUERY: 'jQuery',

    // 백엔드
    JAVA: 'Java',
    NODEJS: 'Node.js',
    EXPRESS: 'Express',
    SPRING_BOOT: 'Spring Boot',
    MYBATIS: 'MyBatis',

    // 데이터베이스
    MONGODB: 'MongoDB',
    MYSQL: 'MySQL',
    ORACLE: 'Oracle',
    POSTGRESQL: 'PostgreSQL',
    SUPABASE: 'Supabase',

    // 기타
    DOCKER: 'Docker',
    AWS: 'AWS',
    FIREBASE: 'Firebase',
    C_SHARP: 'C#',
    STORYBOOK: 'Storybook',
    PLAYWRIGHT: 'Playwright',
    JEST: 'Jest',
    CYPRESS: 'Cypress',
    POSTMAN: 'Postman',
    PIXI: 'Pixi.js',
    LANGCHAIN: 'LangChain',
    VITE: 'Vite',
    GEMINI: 'Google Gemini API',
    LINESDK: 'LINE Messaging API SDK',
    CSV_PARSER: 'csv-parse',
    POSTCSS: 'PostCSS',
    VSCODE_EXTENSION_API: 'VSCode Extension API',
    VERCEL: 'Vercel',
    GAS: 'Google Apps Script',
  }

  return (
    <div className="relative mx-auto w-full max-w-[750px] px-5 sm:px-6">
      <div className="py-8">
        {/* 헤더 섹션 */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold">
            {language === 'ko' ? '이호연' : '李虎演(イホヨン)'}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {language === 'ko'
              ? '안녕하세요! 프론트엔드 개발자입니다.'
              : 'こんにちは！フロントエンド開発者です。'}
          </p>
        </div>

        {/* 연락처 섹션 */}
        <div className="mb-8">
          <div className="flex gap-4">
            <a
              href="https://github.com/ho1112"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-chomin transition-colors"
            >
              <IconGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/lee-hoyeon/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-chomin transition-colors"
            >
              <IconLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:carrien1112@gmail.com"
              className="hover:text-chomin transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* 챗봇 섹션 */}
        <div className="mb-8">
          <ItsMeWidgetLoader
            key={`${language}-${theme}`}
            language={language}
            theme={theme}
          />
        </div>

        {/* 프로필 콘텐츠 섹션들 - 하이브리드 스타일 */}
        <div className="space-y-8">
          {/* 경력 섹션 - 카드 스타일 + 타임라인 */}
          <section className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="w-2 h-2 bg-chomin rounded-full mr-3"></span>
              Professional Experience
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-chomin pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-chomin rounded-full"></div>
                <h3 className="font-semibold text-lg">
                  {language === 'ko'
                    ? '프론트엔드 엔지니어 - 프리랜서'
                    : 'フロントエンドエンジニア - フリーランス'}
                </h3>
                {/* leverages */}
                <p className="text-chomin font-medium">
                  {language === 'ko'
                    ? '인재스카우트 업계 • 2024.03 - 현재'
                    : '人材スカウト業界 • 2024.03 - 現在'}
                </p>
                <ul className="text-muted-foreground mt-2 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        '신졸용 인재 스카우트 시스템의 toB,toC시스템 개발',
                        '검색, 이벤트 기능 추가',
                        '컴포넌트 구조 재설계, 리팩토링',
                        '기업 리브랜딩 대응',
                        '생산성 향상',
                        'Sentry 에러 모니터링 및 버그 수정',
                      ]
                    : [
                        '新卒向けの人材スカウトシステムのto B・to Cシステム開発',
                        '新規検索, オファー, イベント機能追加',
                        'コンポーネント構造の再設計、リファクタリング',
                        '企業リブランディング対応',
                        '生産性向上',
                        'Sentryエラーモニタリングとバグ修正',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {/* ピッコマ */}
                <p className="text-chomin font-medium">
                  {language === 'ko'
                    ? '웹툰・웹소설업계 • 2023.09 - 2024.02'
                    : 'webマンガ・ノベル業界 • 2023.09 - 2024.02'}
                </p>
                <ul className="text-muted-foreground mt-2 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        '웹소설 응모 페이지 마이그레이션(vue -> react)',
                        'Next.js, Tailwind CSS 도입으로 성능 개선',
                        '신규 캠페인 페이지 작성',
                        '응모폼, 서버 전송 API 연결',
                      ]
                    : [
                        'ノベルズ応募ページのマイグレーション(vue -> react)',
                        'Next.js, Tailwind CSSを導入してパフォーマンス改善',
                        '新規キャンペーンページ、scroll, observer eventデザイン適用',
                        '応募フォーム、サーバー送信API繋ぎ込み',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {/* skyticket */}
                <p className="text-chomin font-medium">
                  {language === 'ko'
                    ? '여행・호텔업계 • 2021.05 - 2023.07'
                    : '旅行・ホテル業界 • 2021.05 - 2023.07'}
                </p>
                <ul className="text-muted-foreground mt-2 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        '호텔·투어·항공권 예약 시스템 및 캠페인 페이지 개발',
                        '다중 기술 스택 환경에서 Web Components를 활용한 통합 네비게이션 개발',
                        'SEO 최적화 및 Core Web Vitals 개선 작업',
                        '외부 API 연동 및 데이터 분석 시스템 구축',
                      ]
                    : [
                        'ホテル・ツアー・航空券予約システム及びキャンペーンページ開発',
                        '複数技術スタック環境でWeb Componentsを活用した統合ナビゲーション開発',
                        'SEO最適化及びCore Web Vitals改善作業',
                        '外部API連携及びデータ分析システム構築',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {/* webGame */}
                <p className="text-chomin font-medium">
                  {language === 'ko'
                    ? 'Web게임업계 • 2020.12 - 2021.04'
                    : 'Webゲーム業界 • 2020.20 - 2021.04'}
                </p>
                <ul className="text-muted-foreground mt-2 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? ['레거시 시스템 최신화 및 리팩토링', '리뉴얼 작업']
                    : [
                        'レガシー システムの最新化とリファクタリング',
                        'リニューアル 作業',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              {/* フリーランス - Java */}
              <div className="border-l-4 border-gray-300 pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-300 rounded-full"></div>
                <h3 className="font-semibold text-lg">
                  {language === 'ko'
                    ? 'Java 풀스택 엔지니어 - 프리랜서'
                    : 'Java フルスタックエンジニア - フリーランス'}
                </h3>
                {/* 東証 */}
                <p className="text-chomin font-medium">
                  {language === 'ko'
                    ? '증권업계• 2020.01 - 2020.11'
                    : '証券業界• 2020.01 - 2020.11'}
                </p>
                <ul className="text-muted-foreground mt-2 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        'toC용 주식 투자 정보 검색 시스템 신규 개발',
                        '기술 스택 설계 및 환경 구축',
                      ]
                    : [
                        'toC向けの株式投資情報配信システムを新規開発',
                        '技術スタック設計',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {/* konami */}
                <p className="text-chomin font-medium">
                  {language === 'ko'
                    ? '물류업계• 2019.08 - 2019.12'
                    : '物流業界• 2019.08 - 2019.12'}
                </p>
                <ul className="text-muted-foreground mt-2 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        '소비세 증세에 대응하여 기반 시스템 수정',
                        '재고 관리, 집계 시스템 개발',
                      ]
                    : [
                        '消費税増税に対応して基盤システム修正',
                        '在庫管理, 集計システム開発',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              {/* 正社員 */}
              <div className="border-l-4 border-gray-300 pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-300 rounded-full"></div>
                <h3 className="font-semibold text-lg">
                  {language === 'ko'
                    ? 'Java 풀스택 엔지니어'
                    : 'Java フルスタックエンジニア'}
                </h3>
                <p className="text-chomin font-medium">
                  {language === 'ko'
                    ? '株式会社GROP SC 시스템솔루션부 • 2018.04 - 2019.06'
                    : '株式会社GROP SC システムソリューション部 • 2018.04 - 2019.06'}
                </p>
                <ul className="text-muted-foreground mt-2 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        'Java 기반의 웹 서비스, 네이티브 프로그램 개발 및 유지보수',
                        'Spring Boot를 활용한 백엔드 API 개발',
                        '데이터베이스 설계 및 최적화',
                      ]
                    : [
                        'JavaベースのWebサービス, ネイティブプログラム開発とメンテナンス',
                        'Spring Bootを活用したバックエンドAPI開発',
                        'データベース設計と最適化',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 기술 스택 섹션 - 카드 스타일 + 태그 */}
          <section className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="w-2 h-2 bg-chomin rounded-full mr-3"></span>
              Tech Stack
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3 text-lg">
                  {language === 'ko' ? '프론트엔드' : 'フロントエンド'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'React',
                    'Next.js',
                    'TypeScript',
                    'Vue.js',
                    'Tailwind CSS',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-chomin/10 text-chomin px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-lg">
                  {language === 'ko' ? '개발 도구' : '開発ツール'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Docker', 'AWS', 'Vercel', 'Figma'].map((tool) => (
                    <span
                      key={tool}
                      className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Professional Projects 섹션 */}
          <section className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="w-2 h-2 bg-chomin rounded-full mr-3"></span>
              Professional Projects
            </h2>
            <div className="space-y-6">
              {/* 인재소개 leverages */}
              <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-blue-500">
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'ko' ? '인재스카우트' : '人材スカウト'}
                </h3>
                <p className="text-chomin font-medium mb-3">
                  {language === 'ko' ? '2024.03 - 현재' : '2023.03 - 現在'}
                </p>
                <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        '기업 리브랜딩에 대응해 테마 컬러 변경 작업, 가이드라인 컬러 통합 관리',
                        '검색 조건 저장, 유저 숨기기, 한정 이벤트 기능 추가',
                        'storybook 도입으로 컴포넌트 문서화, 디자이너 연계 강화',
                        'pre-commit hook 도입으로 ESLint 자동 실행(import sort & unused)',
                        'E2E 테스트 도입(playwright)으로 테스트 자동화, 기존 15분짜리 수동 테스트를 2분으로 단축',
                        'Sentry 에러 수정으로 통지 --> 건으로 줄임',
                        'Node, Next.js 버전 업그레이드 대응',
                      ]
                    : [
                        '企業リブランディング対応に伴い、テーマカラー変更作業、ガイドラインカラー統合管理',
                        '検索条件保存、ユーザー非表示、限定イベント機能追加',
                        'storybook導入でコンポーネントドキュメント化、デザイナー連携強化',
                        'pre-commit hook導入でESLint自動実行(import sort & unused)',
                        'E2Eテスト導入(playwright)でテスト自動化、従来15分の手動テストを2分に短縮',
                        'Sentryエラー修正で通知 --> 件に減らし',
                        'Node, Next.jsバージョンアップデート対応',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {[
                    TECH_STACK.NEXTJS,
                    TECH_STACK.REACT,
                    TECH_STACK.TYPESCRIPT,
                    TECH_STACK.SCSS,
                    TECH_STACK.DOCKER,
                    TECH_STACK.STORYBOOK,
                    TECH_STACK.PLAYWRIGHT,
                    TECH_STACK.POSTGRESQL,
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* ピッコマ */}
              <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-green-500">
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'ko'
                    ? '웹툰・웹소설 플랫폼'
                    : 'webマンガ・ノベルプラットフォーム'}
                </h3>
                <p className="text-chomin font-medium mb-3">
                  {language === 'ko'
                    ? '2023.09 - 2024.02'
                    : '2023.09 - 2024.02'}
                </p>
                <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        '전년도(2023) 노벨 응모 페이지 Next.js로 마이그레이션',
                        '2024년 노벨 응모 페이지 신규 작성',
                        'scroll, observer event로 스크롤에 의한 동적 디자인 적용',
                        '시즌별 디자인 작성',
                        '반응형 디자인으로 모바일 사용자 경험 개선',
                        '응모 API 연동',
                        '일본, 한국 팀 커뮤니케이션 브리지 역할 및 기술 연동 지원',
                      ]
                    : [
                        '2023年のノベル応募ページをNext.jsへマイグレーション',
                        '2024年のノベル応募ページを新規作成',
                        'scroll, observer eventでスクロールによる動的デザイン適用',
                        'シーズン別デザイン作成',
                        'レスポンシブデザインでモバイルユーザー体験改善',
                        '応募API連携',
                        '日韓チーム間のコミュニケーションブリッジ役と技術連携支援',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {[
                    TECH_STACK.NEXTJS,
                    TECH_STACK.REACT,
                    TECH_STACK.TYPESCRIPT,
                    TECH_STACK.TAILWIND,
                    TECH_STACK.SCSS,
                    TECH_STACK.VUE,
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* skyticket */}
              <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-purple-500">
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'ko'
                    ? '호텔・투어 플랫폼'
                    : 'ホテル・ツアープラットフォーム'}
                </h3>
                <p className="text-chomin font-medium mb-3">
                  {language === 'ko'
                    ? '2021.05 - 2023.07'
                    : '2021.05 - 2023.07'}
                </p>
                <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        'PHP, Vue, React 등 다양한 기술 스택 간 호환성을 위한 서비스 통합 네비게이션을 Web Components로 개발',
                        'E2E 테스트 도입(Cypress)',
                        '호텔 어른, 어린이 인원 별 검색, 단체 예약을 위한 다중 객실 검색 기능 추가',
                        '해외 호텔 검색 메인 페이지 작성 및 콘텐츠 추가',
                        'Core Web Vitals 개선 - FCP, LCP, CLS 개선',
                        'SEO 최적화를 위한 BreadCrumb 링크, 메타데이터 설정 및 canonical tag를 활용한 URL 정규화 구현',
                        'SEO 대응을 위한 호텔, 온천 목록 페이지 자동 생성',
                        'SSR, SSG(ISR) 페이지 작성',
                        '외부 리뷰 시스템(yotpo) 연동',
                        '외부 API 연동으로 호텔 애널리틱스 데이터 수집 및 SEO 최적화 FAQ 페이지 구축',
                        'Google Tag Manager와 dataLayer 구축으로 웹 분석 시스템 구축',
                        'Google BigQuery에서 데이터를 추출하여 프론트엔드에서 가공 및 표시하는 시스템 구축',
                      ]
                    : [
                        'PHP, Vue, React 等の各技術スタック間の互換性向上のため、サービス全体の統合ナビゲーションをWeb Componentsで開発',
                        'E2Eテスト導入(Cypress)',
                        'ホテル, 温泉の大人・子供別検索, 団体予約用の複数部屋検索機能追加',
                        '海外ホテル検索メインページ作成とコンテンツ追加',
                        'Core Web Vitals改善 - FCP, LCP, CLS改善',
                        'SEO最適化のためのBreadCrumbリンク, メタデータ設定とcanonical tagを利用したURL正規化実装',
                        'SEO対策のためのホテル, 温泉一覧ページ大量生成',
                        'SSR, SSG(ISR)ページ作成',
                        '外部レビューシステム(yotpo)連携',
                        '外部API連携によるホテルアメニティデータ収集とSEO最適化FAQページ構築',
                        'Google Tag ManagerとdataLayer構築によるWeb分析システム実装',
                        'Google BigQueryからデータを抽出し、フロントエンドで加工・表示するシステム構築',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {[
                    TECH_STACK.NEXTJS,
                    TECH_STACK.REACT,
                    TECH_STACK.TYPESCRIPT,
                    TECH_STACK.STYLED_COMPONENTS,
                    TECH_STACK.EXPRESS,
                    TECH_STACK.WEB_COMPONENTS,
                    TECH_STACK.LIT,
                    TECH_STACK.STORYBOOK,
                    TECH_STACK.CYPRESS,
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 웹 게임 개발 */}
              <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-red-500">
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'ko' ? '웹 게임' : 'Webゲーム'}
                </h3>
                <p className="text-chomin font-medium mb-3">
                  {language === 'ko'
                    ? '2020.12 - 2021.04'
                    : '2020.12 - 2021.04'}
                </p>
                <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? ['레거시 코드 리팩토링', '서비스 리뉴얼 대응']
                    : [
                        'レガシー コードリファクタリング',
                        'サービスリニューアル対応',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {[
                    TECH_STACK.JAVASCRIPT,
                    TECH_STACK.NODEJS,
                    TECH_STACK.PIXI,
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Java Full-Stack Projects 아코디언 */}
              <div className="border rounded-lg">
                <button
                  onClick={() => setShowJavaProjects(!showJavaProjects)}
                  className="w-full text-left p-4 flex justify-between items-center hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    <span className="font-semibold text-lg">
                      {language === 'ko'
                        ? 'Java Full-Stack Projects'
                        : 'Java Full-Stack Projects'}
                    </span>
                  </div>
                  <span className="text-muted-foreground">
                    {showJavaProjects ? '▼' : '▶'}
                  </span>
                </button>

                {showJavaProjects && (
                  <div className="px-4 pb-4 space-y-4">
                    {/* 東証 */}
                    <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-yellow-500">
                      <h3 className="font-semibold text-lg mb-2">
                        {language === 'ko'
                          ? '주식 투자 정보 검색 서비스'
                          : '株式投資情報検索サービス'}
                      </h3>
                      <p className="text-chomin font-medium mb-3">
                        {language === 'ko'
                          ? '2020.01 - 2020.11'
                          : '2020.01 - 2020.11'}
                      </p>
                      <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
                        {(language === 'ko'
                          ? [
                              '메인 SE로 참가하여 기술 스택 설계, 환경 구축 및 데모버전 개발',
                              '주식 종목 검색 기능 개발',
                              '기간별 주식 분석 결과 기능 개발',
                              '클라이언트 화면 개발',
                            ]
                          : [
                              'メインSEとして参加し、技術スタック設計、環境構築、デモバージョン開発',
                              '株式銘柄検索機能開発',
                              '期間別株式分析結果機能開発',
                              'クライアント画面開発',
                            ]
                        ).map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {[
                          TECH_STACK.JAVA,
                          TECH_STACK.SPRING_BOOT,
                          TECH_STACK.POSTGRESQL,
                          TECH_STACK.MYBATIS,
                          TECH_STACK.JAVASCRIPT,
                          TECH_STACK.JQUERY,
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* konami */}
                    <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-pink-500">
                      <h3 className="font-semibold text-lg mb-2">
                        {language === 'ko'
                          ? '물류・재고관리 시스템'
                          : '物流・在庫管理システム'}
                      </h3>
                      <p className="text-chomin font-medium mb-3">
                        {language === 'ko'
                          ? '2019.08 - 2019.12'
                          : '2019.08 - 2019.12'}
                      </p>
                      <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
                        {(language === 'ko'
                          ? [
                              '소비세 8%->10% 증세에 따라 기반 시스템 수정',
                              '품목, 종류별 재고 관리, 집계 시스템 개발',
                              'CSV, Excel 출력 기능 개발',
                              '전용 단말기 화면 개발',
                            ]
                          : [
                              '消費税10%増税に対応して基盤システム修正',
                              '品目, 種別別在庫管理, 集計システム開発',
                              'CSV, Excel出力機能開発',
                              '専用端末画面開発',
                            ]
                        ).map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {[
                          TECH_STACK.JAVA,
                          TECH_STACK.JAVASCRIPT,
                          TECH_STACK.POSTGRESQL,
                          'JPA',
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* zuken */}
                    <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-indigo-500">
                      <h3 className="font-semibold text-lg mb-2">
                        {language === 'ko'
                          ? '전기 제어・하네스 설계 소프트웨어'
                          : '電気制御・ハーネス設計ソフトウェア'}
                      </h3>
                      <p className="text-chomin font-medium mb-3">
                        {language === 'ko'
                          ? '2019.01 - 2019.06'
                          : '2019.01 - 2019.06'}
                      </p>
                      <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
                        {(language === 'ko'
                          ? [
                              'Windows 네이티브 데스크탑 프로그램 개발',
                              '고객별 버전 차이에 따른 커스터마이징 유지보수 및 버그 수정',
                              '외국 문의 대응',
                            ]
                          : [
                              '電気・ハーネス設計用Windowsネイティブデスクトッププログラム開発',
                              '顧客別バージョン差異に応じたカスタマイズ保守とバグ修正',
                              '海外問い合わせ対応',
                            ]
                        ).map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {[
                          TECH_STACK.JAVA,
                          TECH_STACK.C_SHARP,
                          TECH_STACK.ORACLE,
                          TECH_STACK.JAVASCRIPT,
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 부품 검색 시스템 */}
                    <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-cyan-500">
                      <h3 className="font-semibold text-lg mb-2">
                        {language === 'ko'
                          ? '부품 정보 검색 시스템'
                          : '部品情報検索システム'}
                      </h3>
                      <p className="text-chomin font-medium mb-3">
                        {language === 'ko'
                          ? '2018.09 - 2018.12'
                          : '2018.09 - 2018.12'}
                      </p>
                      <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
                        {(language === 'ko'
                          ? [
                              '사내 부품 등록, 검색 화면 개발',
                              '테스트 케이스 작성',
                            ]
                          : ['社内部品登録, 検索画面開発', 'テストケース作成']
                        ).map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {[
                          TECH_STACK.JAVA,
                          TECH_STACK.POSTGRESQL,
                          TECH_STACK.JAVASCRIPT,
                          TECH_STACK.JQUERY,
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 第一生命 */}
                    <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-emerald-500">
                      <h3 className="font-semibold text-lg mb-2">
                        {language === 'ko'
                          ? '보험 서비스 간 통합 인증 시스템(SSO)'
                          : '保険サービス間の統合認証システム(SSO)'}
                      </h3>
                      <p className="text-chomin font-medium mb-3">
                        {language === 'ko'
                          ? '2018.04 - 2018.08'
                          : '2018.04 - 2018.08'}
                      </p>
                      <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
                        {(language === 'ko'
                          ? [
                              '기존 서비스와 신규 서비스 통합, 레거시 코드 최신화',
                            ]
                          : [
                              '既存サービスと新規サービス統合, レガシーコード最新化',
                            ]
                        ).map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {[TECH_STACK.JAVA, TECH_STACK.JAVASCRIPT, 'DB2'].map(
                          (tech) => (
                            <span
                              key={tech}
                              className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-3 py-1 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Personal Projects 섹션 */}
          <section className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="w-2 h-2 bg-chomin rounded-full mr-3"></span>
              Personal Projects
            </h2>
            <div className="space-y-6">
              {/* 개인 블로그 플랫폼 */}
              <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-orange-500">
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'ko'
                    ? '개인 블로그 플랫폼'
                    : '個人ブログプラットフォーム'}
                </h3>
                <p className="text-chomin font-medium mb-3">
                  {language === 'ko'
                    ? '2023.09 - 2023.12'
                    : '2023.09 - 2023.12'}
                </p>
                <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        'Next.js와 MDX를 활용한 정적 블로그 사이트를 구축했습니다.',
                        '다크모드, 다국어 지원, 검색 기능을 포함합니다.',
                        'Fuse.js를 사용한 클라이언트 사이드 검색 구현',
                        'Vercel을 통한 자동 배포 및 성능 최적화',
                      ]
                    : [
                        'Next.jsとMDXを活用した静的ブログサイトを構築しました。',
                        'ダークモード、多言語対応、検索機能を含みます。',
                        'Fuse.jsを使用したクライアントサイド検索実装',
                        'Vercelを通じた自動デプロイと性能最適化',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {[
                    TECH_STACK.NEXTJS,
                    TECH_STACK.REACT,
                    TECH_STACK.TYPESCRIPT,
                    TECH_STACK.TAILWIND,
                    'MDX',
                    'github page',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 블로그 AI 페르소나 */}
              <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-blue-500">
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'ko' ? '날씨 앱' : '天気アプリ'}
                </h3>
                <p className="text-chomin font-medium mb-3">
                  {language === 'ko'
                    ? '2023.03 - 2023.05'
                    : '2023.03 - 2023.05'}
                </p>
                <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        'React와 OpenWeatherMap API를 사용한 반응형 날씨 애플리케이션입니다.',
                        '위치 기반 날씨 정보와 5일 예보를 제공합니다.',
                        'PWA 기능으로 모바일 앱처럼 사용 가능',
                        '오프라인 캐싱 및 푸시 알림 기능 구현',
                      ]
                    : [
                        'ReactとOpenWeatherMap APIを使用したレスポンシブ天気アプリケーションです。',
                        '位置ベースの天気情報と5日間の予報を提供します。',
                        'PWA機能でモバイルアプリのように使用可能',
                        'オフラインキャッシングとプッシュ通知機能実装',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {[
                    TECH_STACK.NEXTJS,
                    TECH_STACK.REACT,
                    TECH_STACK.TYPESCRIPT,
                    TECH_STACK.TAILWIND,
                    TECH_STACK.GEMINI,
                    TECH_STACK.SUPABASE,
                    TECH_STACK.VERCEL,
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* RAG Chatbot*/}
              <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-green-500">
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'ko' ? '할 일 관리 앱' : 'タスク管理アプリ'}
                </h3>
                <p className="text-chomin font-medium mb-3">
                  {language === 'ko'
                    ? '2022.10 - 2022.12'
                    : '2022.10 - 2022.12'}
                </p>
                <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        'Vue.js와 Firebase를 활용한 실시간 할 일 관리 애플리케이션입니다.',
                        '드래그 앤 드롭, 우선순위 설정, 팀 협업 기능을 포함합니다.',
                        'Vuex를 사용한 상태 관리 및 실시간 동기화',
                        'Firebase Authentication 및 Firestore 연동',
                      ]
                    : [
                        'Vue.jsとFirebaseを活用したリアルタイムタスク管理アプリケーションです。',
                        'ドラッグ&ドロップ、優先度設定、チーム協力機能を含みます。',
                        'Vuexを使用した状態管理とリアルタイム同期',
                        'Firebase AuthenticationとFirestore連携',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {[
                    TECH_STACK.NEXTJS,
                    TECH_STACK.REACT,
                    TECH_STACK.TYPESCRIPT,
                    TECH_STACK.TAILWIND,
                    TECH_STACK.GEMINI,
                    TECH_STACK.LANGCHAIN,
                    TECH_STACK.SUPABASE,
                    TECH_STACK.VITE,
                    TECH_STACK.VERCEL,
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* SBI証券配当金 */}
              <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-purple-500">
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'ko' ? '게임 개발' : 'ゲーム開発'}
                </h3>
                <p className="text-chomin font-medium mb-3">
                  {language === 'ko'
                    ? '2021.05 - 2021.08'
                    : '2021.05 - 2021.08'}
                </p>
                <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        'Unity를 사용한 2D 플랫폼 게임 개발',
                        'C# 스크립팅으로 게임 로직 및 물리 엔진 구현',
                        '애니메이션 시스템 및 사운드 효과 추가',
                        '모바일 최적화 및 터치 컨트롤 구현',
                      ]
                    : [
                        'Unityを使用した2Dプラットフォームゲーム開発',
                        'C#スクリプティングでゲームロジックと物理エンジン実装',
                        'アニメーションシステムとサウンド効果追加',
                        'モバイル最適化とタッチコントロール実装',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {[
                    TECH_STACK.NEXTJS,
                    TECH_STACK.REACT,
                    TECH_STACK.TYPESCRIPT,
                    TECH_STACK.PLAYWRIGHT,
                    TECH_STACK.GAS,
                    TECH_STACK.LINESDK,
                    TECH_STACK.EXPRESS,
                    'GCP VM',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* css 린터 npm/vscode 확장프로그램 */}
              <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-teal-500">
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'ko' ? 'AI 챗봇 개발' : 'AIチャットボット開発'}
                </h3>
                <p className="text-chomin font-medium mb-3">
                  {language === 'ko'
                    ? '2020.12 - 2021.03'
                    : '2020.12 - 2021.03'}
                </p>
                <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        'OpenAI GPT API를 활용한 지능형 챗봇 개발',
                        '자연어 처리 및 대화 컨텍스트 관리 구현',
                        '웹 인터페이스와 API 연동으로 실시간 채팅 기능',
                        '사용자 피드백 수집 및 모델 성능 개선',
                      ]
                    : [
                        'OpenAI GPT APIを活用した知能型チャットボット開発',
                        '自然言語処理と会話コンテキスト管理実装',
                        'WebインターフェースとAPI連携でリアルタイムチャット機能',
                        'ユーザーフィードバック収集とモデル性能改善',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {[
                    TECH_STACK.NODEJS,
                    TECH_STACK.TYPESCRIPT,
                    TECH_STACK.POSTCSS,
                    TECH_STACK.VSCODE_EXTENSION_API,
                    'Babel Parser',
                    'Glob',
                    'Commander.js',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
