'use client'

import { useTheme } from 'next-themes'
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

  // 색상 로테이션 배열
  const colorPalette = [
    {
      border: 'border-blue-500',
      bg: 'bg-blue-100 dark:bg-blue-900',
      text: 'text-blue-800 dark:text-blue-200',
    },
    {
      border: 'border-green-500',
      bg: 'bg-green-100 dark:bg-green-900',
      text: 'text-green-800 dark:text-green-200',
    },
    {
      border: 'border-purple-500',
      bg: 'bg-purple-100 dark:bg-purple-900',
      text: 'text-purple-800 dark:text-purple-200',
    },
    {
      border: 'border-orange-500',
      bg: 'bg-orange-100 dark:bg-orange-900',
      text: 'text-orange-800 dark:text-orange-200',
    },
  ]

  // 프로젝트 데이터
  const professionalProjects = [
    {
      title:
        language === 'ko'
          ? 'E-커머스 플랫폼 리뉴얼'
          : 'Eコマースプラットフォームリニューアル',
      period: language === 'ko' ? '2023.01 - 2023.08' : '2023.01 - 2023.08',
      description:
        language === 'ko'
          ? '기존 레거시 시스템을 Next.js로 전면 리뉴얼하여 성능을 3배 향상시켰습니다.'
          : '既存レガシーシステムをNext.jsで全面リニューアルし、性能を3倍向上させました。',
      techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    },
    {
      title:
        language === 'ko'
          ? '실시간 채팅 애플리케이션'
          : 'リアルタイムチャットアプリケーション',
      period: language === 'ko' ? '2022.06 - 2022.12' : '2022.06 - 2022.12',
      description:
        language === 'ko'
          ? 'WebSocket을 활용한 실시간 채팅 기능과 파일 공유 시스템을 개발했습니다.'
          : 'WebSocketを活用したリアルタイムチャット機能とファイル共有システムを開発しました。',
      techs: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    },
    {
      title:
        language === 'ko'
          ? '관리자 대시보드 시스템'
          : '管理者ダッシュボードシステム',
      period: language === 'ko' ? '2021.09 - 2022.01' : '2021.09 - 2022.01',
      description:
        language === 'ko'
          ? 'Vue.js와 Chart.js를 활용한 실시간 데이터 시각화 대시보드를 개발했습니다.'
          : 'Vue.jsとChart.jsを活用したリアルタイムデータ可視化ダッシュボードを開発しました。',
      techs: ['Vue.js', 'Chart.js', 'Element UI', 'WebSocket'],
    },
  ]

  const personalProjects = [
    {
      title:
        language === 'ko' ? '개인 블로그 플랫폼' : '個人ブログプラットフォーム',
      period: language === 'ko' ? '2023.09 - 2023.12' : '2023.09 - 2023.12',
      description:
        language === 'ko'
          ? 'Next.js와 MDX를 활용한 정적 블로그 사이트를 구축했습니다. 다크모드, 다국어 지원, 검색 기능을 포함합니다.'
          : 'Next.jsとMDXを活用した静的ブログサイトを構築しました。ダークモード、多言語対応、検索機能を含みます。',
      techs: ['Next.js', 'MDX', 'Tailwind CSS', 'Fuse.js'],
    },
    {
      title: language === 'ko' ? '날씨 앱' : '天気アプリ',
      period: language === 'ko' ? '2023.03 - 2023.05' : '2023.03 - 2023.05',
      description:
        language === 'ko'
          ? 'React와 OpenWeatherMap API를 사용한 반응형 날씨 애플리케이션입니다. 위치 기반 날씨 정보와 5일 예보를 제공합니다.'
          : 'ReactとOpenWeatherMap APIを使用したレスポンシブ天気アプリケーションです。位置ベースの天気情報と5日間の予報を提供します。',
      techs: ['React', 'OpenWeatherMap API', 'CSS Modules', 'PWA'],
    },
    {
      title: language === 'ko' ? '할 일 관리 앱' : 'タスク管理アプリ',
      period: language === 'ko' ? '2022.10 - 2022.12' : '2022.10 - 2022.12',
      description:
        language === 'ko'
          ? 'Vue.js와 Firebase를 활용한 실시간 할 일 관리 애플리케이션입니다. 드래그 앤 드롭, 우선순위 설정, 팀 협업 기능을 포함합니다.'
          : 'Vue.jsとFirebaseを活用したリアルタイムタスク管理アプリケーションです。ドラッグ&ドロップ、優先度設定、チーム協力機能を含みます。',
      techs: ['Vue.js', 'Firebase', 'Vuex', 'Vue Draggable'],
    },
  ]

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
                        '신규 검색, 오퍼, 이벤트 기능 추가',
                        '컴포넌트 구조 재설계, 리팩토링',
                        '문의, 트러블 대응',
                        '기업 리브랜딩 대응',
                        '생산성 향상(storybook, playwright 도입, Pre-commit Hook으로 ESLint 자동 실행)',
                        'Sentry 에러 모니터링 및 버그 수정',
                      ]
                    : [
                        '新卒向けの人材スカウトシステムのto B・to Cシステム開発',
                        '新規検索, オファー, イベント機能追加',
                        'コンポーネント構造の再設計、リファクタリング',
                        '問い合わせ、トラブル対応',
                        '企業リブランディング対応',
                        '生産性向上(storybook, playwright 導入, Pre-commit HookでESLint自動実行)',
                        'Sentryエラーモニタリングとバグ修正',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {/* ピッコマ */}
                <p className="text-chomin font-medium">
                  {language === 'ko'
                    ? '웹툰・소설업계 • 2023.09 - 2024.02'
                    : 'webマンガ・ノベル業界 • 2023.09 - 2024.02'}
                </p>
                <ul className="text-muted-foreground mt-2 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        '웹소설 응모 페이지 마이그레이션(vue -> react)',
                        'Next.js, Tailwind CSS 도입으로 성능 개선',
                        '신규 캠페인 페이지, scroll, observer event디자인 적용',
                        '반응형 디자인으로 모바일 사용자 경험 개선',
                        '응모폼, 서버 전송 API 연결',
                      ]
                    : [
                        'ノベルズ応募ページのマイグレーション(vue -> react)',
                        'Next.js, Tailwind CSSを導入してパフォーマンス改善',
                        '新規キャンペーンページ、scroll, observer eventデザイン適用',
                        'レスポンシブデザインでモバイルユーザー体験改善',
                        '応募フォーム、サーバー送信API繋ぎ込み',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {/* skyticket */}
                <p className="text-chomin font-medium">
                  {language === 'ko'
                    ? '테크스타트업1 • 2022.03 - 현재11'
                    : 'テックスタートアップ • 2022.03 - 現在'}
                </p>
                <ul className="text-muted-foreground mt-2 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        'React, Next.js를 활용한 웹 애플리케이션 개발 및 팀 리딩을 담당하고 있습니다.',
                        'TypeScript 도입으로 타입 안정성 확보 및 개발 생산성 향상',
                        'Stripe 결제 시스템 연동 및 보안 강화',
                        '반응형 디자인으로 모바일 사용자 경험 개선',
                      ]
                    : [
                        'React、Next.jsを活用したWebアプリケーション開発とチームリーディングを担当しています。',
                        'TypeScript導入でタイプ安全性確保と開発生産性向上',
                        'Stripe決済システム連携とセキュリティ強化',
                        'レスポンシブデザインでモバイルユーザー体験改善',
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
                {/* 東証 */}
                <p className="text-chomin font-medium">
                  {language === 'ko'
                    ? '증권업계• 2020.01 - 2020.11'
                    : '証券業界• 2020.01 - 2020.11'}
                </p>
                <ul className="text-muted-foreground mt-2 list-disc list-inside space-y-1">
                  {(language === 'ko'
                    ? [
                        'toC용 주식 정보 검색 시스템 신규 개발',
                        '기술 스택 설계 및 환경 구축',
                        'DB설계',
                      ]
                    : [
                        'toC向けの株情報配信システムを新規開発',
                        '技術スタック設計',
                        'DB設計',
                      ]
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="border-l-4 border-gray-300 pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-300 rounded-full"></div>
                <h3 className="font-semibold text-lg">
                  {language === 'ko'
                    ? 'Java 풀스택 엔지니어'
                    : 'Java フルスタックエンジニア'}
                </h3>
                {/* 正社員 */}
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
              {professionalProjects.map((project, index) => {
                const color = colorPalette[index % colorPalette.length]
                const descriptions =
                  language === 'ko'
                    ? [
                        [
                          '기존 레거시 시스템을 Next.js로 전면 리뉴얼하여 성능을 3배 향상시켰습니다.',
                          'TypeScript 도입으로 타입 안정성 확보 및 개발 생산성 향상',
                          'Stripe 결제 시스템 연동 및 보안 강화',
                          '반응형 디자인으로 모바일 사용자 경험 개선',
                        ],
                        [
                          'WebSocket을 활용한 실시간 채팅 기능과 파일 공유 시스템을 개발했습니다.',
                          'Socket.io와 Node.js를 사용한 실시간 통신 구현',
                          'MongoDB를 활용한 채팅 기록 저장 및 검색 기능',
                          '사용자 인증 및 권한 관리 시스템 구축',
                        ],
                        [
                          'Vue.js와 Chart.js를 활용한 실시간 데이터 시각화 대시보드를 개발했습니다.',
                          'Element UI를 사용한 사용자 친화적 인터페이스 구현',
                          'WebSocket을 통한 실시간 데이터 업데이트',
                          '다양한 차트 타입 지원 및 커스터마이징 기능',
                        ],
                      ]
                    : [
                        [
                          '既存レガシーシステムをNext.jsで全面リニューアルし、性能を3倍向上させました。',
                          'TypeScript導入でタイプ安全性確保と開発生産性向上',
                          'Stripe決済システム連携とセキュリティ強化',
                          'レスポンシブデザインでモバイルユーザー体験改善',
                        ],
                        [
                          'WebSocketを活用したリアルタイムチャット機能とファイル共有システムを開発しました。',
                          'Socket.ioとNode.jsを使用したリアルタイム通信実装',
                          'MongoDBを活用したチャット記録保存と検索機能',
                          'ユーザー認証と権限管理システム構築',
                        ],
                        [
                          'Vue.jsとChart.jsを活用したリアルタイムデータ可視化ダッシュボードを開発しました。',
                          'Element UIを使用したユーザーフレンドリーなインターフェース実装',
                          'WebSocketを通じたリアルタイムデータ更新',
                          '多様なチャートタイプサポートとカスタマイズ機能',
                        ],
                      ]
                return (
                  <div
                    key={index}
                    className={`bg-muted/30 rounded-lg p-5 border-l-4 ${color.border}`}
                  >
                    <h3 className="font-semibold text-lg mb-2">
                      {project.title}
                    </h3>
                    <p className="text-chomin font-medium mb-3">
                      {project.period}
                    </p>
                    <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
                      {descriptions[index].map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.techs.map((tech) => (
                        <span
                          key={tech}
                          className={`${color.bg} ${color.text} px-3 py-1 rounded-full text-xs font-medium`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Personal Projects 섹션 */}
          <section className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="w-2 h-2 bg-chomin rounded-full mr-3"></span>
              Personal Projects
            </h2>
            <div className="space-y-6">
              {personalProjects.map((project, index) => {
                const globalIndex = professionalProjects.length + index
                const color = colorPalette[globalIndex % colorPalette.length]
                const descriptions =
                  language === 'ko'
                    ? [
                        [
                          'Next.js와 MDX를 활용한 정적 블로그 사이트를 구축했습니다.',
                          '다크모드, 다국어 지원, 검색 기능을 포함합니다.',
                          'Fuse.js를 사용한 클라이언트 사이드 검색 구현',
                          'Vercel을 통한 자동 배포 및 성능 최적화',
                        ],
                        [
                          'React와 OpenWeatherMap API를 사용한 반응형 날씨 애플리케이션입니다.',
                          '위치 기반 날씨 정보와 5일 예보를 제공합니다.',
                          'PWA 기능으로 모바일 앱처럼 사용 가능',
                          '오프라인 캐싱 및 푸시 알림 기능 구현',
                        ],
                        [
                          'Vue.js와 Firebase를 활용한 실시간 할 일 관리 애플리케이션입니다.',
                          '드래그 앤 드롭, 우선순위 설정, 팀 협업 기능을 포함합니다.',
                          'Vuex를 사용한 상태 관리 및 실시간 동기화',
                          'Firebase Authentication 및 Firestore 연동',
                        ],
                      ]
                    : [
                        [
                          'Next.jsとMDXを活用した静的ブログサイトを構築しました。',
                          'ダークモード、多言語対応、検索機能を含みます。',
                          'Fuse.jsを使用したクライアントサイド検索実装',
                          'Vercelを通じた自動デプロイと性能最適化',
                        ],
                        [
                          'ReactとOpenWeatherMap APIを使用したレスポンシブ天気アプリケーションです。',
                          '位置ベースの天気情報と5日間の予報を提供します。',
                          'PWA機能でモバイルアプリのように使用可能',
                          'オフラインキャッシングとプッシュ通知機能実装',
                        ],
                        [
                          'Vue.jsとFirebaseを活用したリアルタイムタスク管理アプリケーションです。',
                          'ドラッグ&ドロップ、優先度設定、チーム協力機能を含みます。',
                          'Vuexを使用した状態管理とリアルタイム同期',
                          'Firebase AuthenticationとFirestore連携',
                        ],
                      ]
                return (
                  <div
                    key={index}
                    className={`bg-muted/30 rounded-lg p-5 border-l-4 ${color.border}`}
                  >
                    <h3 className="font-semibold text-lg mb-2">
                      {project.title}
                    </h3>
                    <p className="text-chomin font-medium mb-3">
                      {project.period}
                    </p>
                    <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
                      {descriptions[index].map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.techs.map((tech) => (
                        <span
                          key={tech}
                          className={`${color.bg} ${color.text} px-3 py-1 rounded-full text-xs font-medium`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
