import IconBlog from '@/components/icon/Blog'
import IconExternalLink from '@/components/icon/ExternalLink'
import IconGithub from '@/components/icon/Github'
import IconLinkedin from '@/components/icon/LinkedIn'
import IconNpm from '@/components/icon/Npm'
import IconVSCode from '@/components/icon/VSCode'
import ChatbotButton from '@/components/profile/ChatbotButton'
import ChatbotSection from '@/components/profile/ChatbotSection'

export async function generateStaticParams() {
  return [{ language: 'ko' }, { language: 'ja' }]
}

/* ── 課題→成果 テーブル ── */
function ChallengeTable({
  language,
  items,
}: {
  language: 'ko' | 'ja'
  items: { challenge: React.ReactNode; result: React.ReactNode }[]
}) {
  const t = (ko: string, ja: string) => (language === 'ko' ? ko : ja)
  return (
    <table data-challenge-table className="mt-4 w-full border-collapse text-sm">
      <thead>
        <tr className="bg-muted/30">
          <th className="border border-border/60 px-3 py-2 text-left font-medium w-[5%]" />
          <th className="border border-border/60 px-3 py-2 text-left font-medium w-[35%]">
            {t('과제', '課題')}
          </th>
          <th className="border border-border/60 px-3 py-2 text-left font-medium">
            {t('대응・성과', '取り組み・成果')}
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((row, i) => (
          <tr key={i} className="hover:bg-muted/10">
            <td className="border border-border/60 px-3 py-2 text-center text-xs text-muted-foreground">
              {i + 1}
            </td>
            <td className="border border-border/60 px-3 py-2 align-top">
              {row.challenge}
            </td>
            <td className="border border-border/60 px-3 py-2 align-top">
              {row.result}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

/* ── 技術タグ ── */
function TechTags({ items }: { items: string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {items.map((tech) => (
        <span
          key={tech}
          className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground"
        >
          {tech}
        </span>
      ))}
    </div>
  )
}

export default function ResumePage({
  params,
}: {
  params: { language: 'ko' | 'ja' }
}) {
  const language = params.language
  const t = (ko: string, ja: string) => (language === 'ko' ? ko : ja)

  return (
    <div className="mx-auto w-full max-w-[720px] px-5 py-10 sm:px-6">
      {/* ===== 헤더 ===== */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold">
          {t('이호연', '李虎演（イホヨン）')}
        </h1>
        <p className="mt-1 text-muted-foreground">
          {t('프론트엔드 엔지니어', 'フロントエンドエンジニア')}
        </p>
      </header>

      {/* ===== 연락처 ===== */}
      <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">
          <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
            <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z" />
          </svg>
          {t('일본, 도쿄', '日本、東京')}
        </span>
        <div className="flex gap-3">
          <a href="https://github.com/ho1112" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            <IconGithub className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/lee-hoyeon/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            <IconLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>

      <hr className="border-border/50 mb-8" />

      {/* ===== 직무요약 ===== */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-bold">{t('📝 직무요약', '📝 職務要約')}</h2>
        <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap">
          {t(
            `2018년 株式会社GROP SC에 입사하여 Java 기반의 웹 서비스 및 네이티브 프로그램 개발을 담당. 이후 프리랜서로 전향하여 Java 풀스택 엔지니어로 증권·물류 업계의 시스템 개발에 참여.

2020년 12월부터 프론트엔드 엔지니어로 전향. 웹 게임, MAU 700만 규모의 여행 플랫폼, 웹소설 플랫폼을 거쳐 현재 인재 스카우트 서비스의 toB·toC 시스템 개발을 담당.

프론트엔드 전문가가 부재하거나 기술 부채가 쌓인 환경에서 아키텍처 정비, DX 개선, 테스트 자동화를 주도. E2E 테스트 도입으로 기존 15분 수동 테스트를 2분으로 단축하고, Sentry 에러 모니터링을 통해 주간 에러 건수를 94% 절감(1,065건→60건)한 경험 있음.`,
            `2018年に株式会社GROP SCに入社し、JavaベースのWebサービスおよびネイティブプログラム開発を担当。その後フリーランスに転向し、Javaフルスタックエンジニアとして証券・物流業界のシステム開発に参画。

2020年12月よりフロントエンドエンジニアに転向。Webゲーム、MAU700万規模の旅行プラットフォーム、Webノベルプラットフォームを経て、現在は人材スカウトサービスのtoB・toCシステム開発を担当。

フロントエンド専門家が不在または技術負債が蓄積した環境において、アーキテクチャ整備、DX改善、テスト自動化を主導。E2Eテスト導入により従来15分の手動テストを2分に短縮し、Sentryエラーモニタリングを通じて週次エラー件数を94%削減（1,065件→60件）した経験あり。`
          )}
        </p>
      </section>

      <hr className="border-border/50 mb-10" />

      {/* ===== 직무경력 ===== */}
      <section className="mb-10">
        <h2 className="mb-8 text-lg font-bold">
          {t('🧑‍💻 직무경력', '🧑‍💻 職務経歴')}
        </h2>

        {/* ========== レバレジーズ ========== */}
        <div className="mb-12">
          <h3 className="text-base font-bold">
            {t(
              '🏢 レバレジーズ株式会社（업무위탁・2024/03〜현재）',
              '🏢 レバレジーズ株式会社（業務委託・2024/03〜現在）'
            )}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {t('인재스카우트 업계', '人材スカウト業界')}
          </p>
          <p className="mt-3 text-sm font-medium">
            {t(
              '신졸용 다이렉트 리크루팅 서비스의 toB・toC 시스템 개발',
              '新卒向けダイレクトリクルーティングサービスのtoB・toCシステム開発'
            )}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            PO:1, PM:2, Designer:3, Engineer:8
          </p>
          <ul className="mt-3 text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li>
              {t(
                'Laravel 중심 팀에서 유일한 프론트엔드 전문 엔지니어로 참여. 프론트엔드 관련 의사결정(아키텍처 설계, 기술 선정, 코드 컨벤션)을 주도',
                'Laravel中心のチームで唯一のフロントエンド専任エンジニアとして参画。フロントエンド関連の意思決定（アーキテクチャ設計、技術選定、コードコンベンション）を主導'
              )}
            </li>
            <li>
              {t(
                'toB(기업용 관리 화면)와 toC(학생용 서비스) 양쪽 프론트엔드를 동시 담당',
                'toB（企業向け管理画面）とtoC（学生向けサービス）双方のフロントエンドを同時担当'
              )}
            </li>
            <li>
              {t(
                '프론트엔드 업무 범위를 넘어 GraphQL 쿼리 작성 및 Laravel 백엔드 수정도 병행',
                'フロントエンドの業務範囲を超え、GraphQLクエリ作成やLaravelバックエンド修正も並行して対応'
              )}
            </li>
          </ul>

          <ChallengeTable
            language={language}
            items={[
              {
                challenge: (
                  <>
                    <strong>{language === 'ko' ? '프론트엔드 아키텍처 정비' : 'フロントエンドアーキテクチャ整備'}</strong>
                    <br />
                    {language === 'ko'
                      ? 'Atomic Designが形式的으로만 존재하고 실제 배치 기준이 없어 컴포넌트 구조가 혼재하고 있었다. Storybook은 내부 에러로 기동 불가 상태로 방치되어 있어 디자이너·다른 엔지니어가 컴포넌트를 확인할 수 없었다. 또한 Next.js 13의 보안 지원이 종료되었으나 Docker/Bun 환경의 복잡성으로 업그레이드가 방치되어 있었다.'
                      : 'Atomic Designが形式的に存在するだけで配置基準がなく、コンポーネント構造が混在していた。Storybookは内部エラーで起動不可の状態で放置され、デザイナーや他エンジニアがコンポーネントを確認できなかった。またNext.js 13のセキュリティサポートが終了していたが、Docker/Bun環境の複雑さからアップグレードが放置されていた。'}
                  </>
                ),
                result: (
                  <>
                    {language === 'ko'
                      ? '전체 컴포넌트를 전수 조사하여 미사용 코드를 삭제하고, Atomic 구조를 해체한 뒤 Colocation 기반 구조로 리팩토링. pageExtensions로 라우트/화면을 분리하고 페이지 전용 _components/ 디렉토리를 도입'
                      : '全コンポーネントの棚卸しを行い未使用コードを削除、Atomic構造を解体しColocation基盤構造へリファクタリング。pageExtensionsでルート/画面を分離し、ページ専用_components/ディレクトリを導入'}
                    <br />
                    {language === 'ko'
                      ? 'Storybook을 완전 삭제 후 최신 버전으로 재구축. Apollo Client Mock을 통합하고, 스테이징 환경에 Docker로 자동 배포하여 디자이너·엔지니어가 언제든 확인 가능하도록 정비. 컴포넌트(tsx) + 스타일(scss) + 스토리(stories.tsx) 3파일 세트 작성 컨벤션을 도입'
                      : 'Storybookを完全削除後、最新バージョンで再構築。Apollo Client Mock統合し、ステージング環境にDockerで自動デプロイし、デザイナー・エンジニアがいつでも確認可能に整備。コンポーネント(tsx)+スタイル(scss)+ストーリー(stories.tsx)の3ファイルセット作成コンベンションを導入'}
                    <br />
                    {language === 'ko'
                      ? 'Next.js 13→14, Node.js 버전업을 Docker 멀티스테이지 빌드 환경에서 실행. bun.lock→bun.lockb 전환, Dependabot 설정 갱신, 의존성 워크플로우를 정립하여 README에 문서화'
                      : 'Next.js 13→14、Node.jsバージョンアップをDockerマルチステージビルド環境で実施。bun.lock→bun.lockb移行、Dependabot設定更新、依存性ワークフローを確立しREADMEに文書化'}
                  </>
                ),
              },
              {
                challenge: (
                  <>
                    <strong>{language === 'ko' ? '생산성 향상' : '生産性向上'}</strong>
                    <br />
                    {language === 'ko'
                      ? '수동 테스트에 15분이 소요되어 릴리스 전 검증이 개발의 병목이 되고 있었다. 주간 Sentry 에러 건수가 1,065건에 달하여 서비스 안정성에 과제가 있었으나 모니터링 체계가 없어 대응이 후순위로 밀려 있었다. 코드 품질 관리가 속인적이고 import 정리 누락이 빈번하여 리뷰에 불필요한 시간이 소요되고 있었다.'
                      : '手動テストに15分かかりリリース前の検証が開発のボトルネックになっていた。週次Sentryエラー件数が1,065件に達しサービス安定性に課題があったが、モニタリング体制がなく対応が後回しになっていた。コード品質管理が属人的でimport整理漏れが頻発し、レビューに不要な時間がかかっていた。'}
                  </>
                ),
                result: (
                  <>
                    {language === 'ko'
                      ? 'Playwright E2E 테스트를 Docker 환경에서 도입하여 기존 15분의 수동 테스트를 2분으로 단축'
                      : 'Playwright E2EテストをDocker環境で導入し、従来15分の手動テストを2分に短縮'}
                    <br />
                    {language === 'ko'
                      ? '에러 모니터링 체계를 구축하고 집중 수정을 실시하여 주간 에러를 94% 절감 (1,065건 → 60건)'
                      : 'エラーモニタリング体制を構築し集中修正を実施、週次エラーを94%削減（1,065件→60件）'}
                    <br />
                    {language === 'ko'
                      ? 'ESLint 룰 정비 + pre-commit hooks 도입으로 import sort·unused 정리를 자동화하여 리뷰 품질 향상'
                      : 'ESLintルール整備＋pre-commit hooks導入でimport sort・unused整理を自動化し、レビュー品質を向上'}
                  </>
                ),
              },
              {
                challenge: (
                  <>
                    <strong>{language === 'ko' ? '기능 개발' : '機能開発'}</strong>
                    <br />
                    {language === 'ko'
                      ? '기업이 채용 활동의 효과를 정량적으로 파악할 수 없어 개선 판단이 어려웠다. 기업-학생 간 면접 일정 조율이 수동으로 이뤄져 비효율적이었고, 복수 서비스 간 유저 온보딩이 복잡하여 이탈율이 높았다. toB·toC 양측에서 다양한 채용 기능 확장 요구가 있었다.'
                      : '企業が採用活動の効果を定量的に把握できず改善判断が困難だった。企業と学生間の面接日程調整が手動で非効率であり、複数サービス間のユーザーオンボーディングが複雑で離脱率が高かった。toB・toC双方から多様な採用機能拡張要求があった。'}
                  </>
                ),
                result: (
                  <>
                    {language === 'ko'
                      ? '직근 6개월간의 오퍼 전송·열람·수락·이벤트 참가 지표를 집계하고, 막대/선 그래프와 전월 대비 증감률을 동시에 보여주는 채용 활동 대시보드를 개발'
                      : '直近6か月のオファー送信・開封・承諾・イベント参加指標を集計し、棒/折れ線グラフと前月比増減率を表示する採用活動ダッシュボードを開発'}
                    <br />
                    {language === 'ko'
                      ? '타이틀·날짜·시간·정원·장소 등록→학생 응답→기업 재편집→참가자 CSV 다운로드까지의 이벤트 관리 플로우를 설계·구현'
                      : 'タイトル・日付・時間・定員・場所登録→学生応答→企業再編集→参加者CSVダウンロードまでのイベント管理フローを設計・実装'}
                    <br />
                    {language === 'ko'
                      ? '외부 서비스 유입 판정과 인증 상태에 따른 동적 리다이렉트를 구현하여 회원가입·로그인 도선을 최적화'
                      : '外部サービスからの流入判定と認証状態に応じた動的リダイレクトを実装し、会員登録・ログイン導線を最適化'}
                    <br />
                    {language === 'ko'
                      ? '검색조건 저장, 유저 비표시 리스트, 후보자 리스트, 한정 이벤트, 기업 리브랜딩 테마 컬러 통합 등 다수 기능 개발'
                      : '検索条件保存、ユーザー非表示リスト、候補者リスト、限定イベント、企業リブランディングテーマカラー統合など多数機能開発'}
                  </>
                ),
              },
              {
                challenge: (
                  <>
                    <strong>{language === 'ko' ? 'PoC 검증' : 'PoC検証'}</strong>
                    <br />
                    {language === 'ko'
                      ? 'Laravel 중심 팀에서 유일한 프론트엔드 전문 엔지니어였기 때문에, 신규 기능의 기술적 실현 가능성에 대한 판단을 의뢰받는 경우가 많았다. PM·디자이너가 구상한 기능을 실제로 구현 가능한지 사전에 검증할 필요가 있었다.'
                      : 'Laravel中心のチームで唯一のフロントエンド専門エンジニアだったため、新規機能の技術的実現可能性の判断を依頼されることが多かった。PM・デザイナーが構想した機能が実際に実装可能か、事前に検証する必要があった。'}
                  </>
                ),
                result: language === 'ko'
                  ? '차트 라이브러리 비교 검증(Recharts 선정), 마우스 드래그 이동(dnd-kit), Google Calendar 연동, Lexical 에디터 태그 삽입 등 각 기술의 실현 가능성과 선정 판단 근거를 제공'
                  : 'チャートライブラリ比較検証（Recharts選定）、マウスドラッグ移動（dnd-kit）、Googleカレンダー連携、Lexicalエディタタグ挿入など各技術の実現可能性と選定判断根拠を提供',
              },
            ]}
          />

          <TechTags items={['Next.js', 'React', 'TypeScript', 'SCSS', 'Docker', 'Bun', 'Storybook', 'Playwright', 'Apollo Client', 'GraphQL', 'PostgreSQL']} />
        </div>

        {/* ========== ピッコマ ========== */}
        <div className="mb-12">
          <h3 className="text-base font-bold">
            {t(
              '🏢 ピッコマ（업무위탁・2023/09〜2024/02）',
              '🏢 ピッコマ（業務委託・2023/09〜2024/02）'
            )}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {t('웹툰・웹소설 업계', 'マンガ・ノベル業界')}
          </p>
          <p className="mt-3 text-sm font-medium">
            {t(
              'WEB 소설 투고 페이지(연 1회 개최) 마이그레이션 및 신규 개발 — 2회분 담당',
              'WEB小説投稿ページ（年1回開催）マイグレーションおよび新規開発 — 2回分担当'
            )}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Designer:1, Engineer:1
          </p>
          <ul className="mt-3 text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li>
              {t(
                '전임 담당자 퇴사로 전년도(Vue) 코드 유지보수 불가 상태. 사내에 Next.js 경험자가 없어 Next.js를 주력으로 다루는 프론트엔드 엔지니어로서 참가',
                '前任担当者の退職で前年度（Vue）コードの保守が不可能な状態。社内にNext.js経験者がおらず、Next.jsを主力とするフロントエンドエンジニアとして参画'
              )}
            </li>
            <li>
              {t(
                '프로젝트 생성부터 아키텍처 설계·구현까지 단독 담당',
                'プロジェクト作成からアーキテクチャ設計・実装まで単独で担当'
              )}
            </li>
          </ul>

          <ChallengeTable
            language={language}
            items={[
              {
                challenge: (
                  <>
                    <strong>{language === 'ko' ? 'Vue→Next.js 전면 재구축' : 'Vue→Next.js全面再構築'}</strong>
                    <br />
                    {language === 'ko'
                      ? '매년 비주얼이 바뀌고 시즌별로도 테마가 변경되는 이벤트 페이지의 특성상 확장 가능한 아키텍처 설계가 필요했다.'
                      : '毎年ビジュアルが変わり、シーズンごとにテーマも変更されるイベントページの特性上、拡張可能なアーキテクチャ設計が必要だった。'}
                  </>
                ),
                result: language === 'ko'
                  ? 'Next.js App Router로 프로젝트를 처음부터 구축. "바뀌는 것(연도별 비주얼)"과 "안 바뀌는 것(폼·store·API)"을 분리하는 구조를 설계. 연도별 아카이브 분리(contents/{year}/)와 yearManager를 통한 자동 분기로 새 연도 추가 시 공통 로직을 건드리지 않는 확장 가능한 아키텍처를 구축. 연도 내 시즌별 4회 테마·이미지 변경에도 대응'
                  : 'Next.js App Routerでプロジェクトをゼロから構築。「変わるもの（年度別ビジュアル）」と「変わらないもの（フォーム・store・API）」を分離する構造を設計。年度別アーカイブ分離（contents/{year}/）とyearManagerによる自動分岐で、新年度追加時に共通ロジックを触らない拡張可能なアーキテクチャを構築。年度内シーズン別4回のテーマ・イメージ変更にも対応',
              },
              {
                challenge: (
                  <>
                    <strong>{language === 'ko' ? '메인 비주얼 애니메이션 구현' : 'メインビジュアルアニメーション実装'}</strong>
                    <br />
                    {language === 'ko'
                      ? '2024년도는 디자인이 완전히 변경되어 메인 비주얼에 동적 애니메이션 연출과 스크롤 연동 제어가 요구되었다.'
                      : '2024年度はデザインが完全に変更され、メインビジュアルに動的アニメーション演出とスクロール連動制御が求められた。'}
                  </>
                ),
                result: language === 'ko'
                  ? '정지 이미지에 CSS 애니메이션으로 줌인 효과를 적용하고 2장의 캐릭터 이미지를 크로스페이드로 부드럽게 전환하는 루프 연출을 구현. Intersection Observer API로 뷰포트 이탈 시 애니메이션을 일시정지하고 재진입 시 마지막 상태에서 이어서 재생하도록 제어'
                  : '静止画像にCSSアニメーションでズームイン効果を適用し、2枚のキャラクター画像をクロスフェードで滑らかに切り替えるループ演出を実装。Intersection Observer APIでビューポート離脱時にアニメーションを一時停止し、再進入時に最後の状態から再生を再開するよう制御',
              },
            ]}
          />
          <ul className="mt-3 list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>{t('output: \'export\'로 정적 빌드하여 CDN 서빙 구조를 채택', 'output: \'export\'で静的ビルドし、CDNサーブ構成を採用')}</li>
            <li>{t('일본-한국 팀 간 기술 연동 및 커뮤니케이션 브리지 역할을 수행', '日韓チーム間の技術連携およびコミュニケーションブリッジ役を担当')}</li>
          </ul>

          <TechTags items={['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'SCSS', 'Redux Toolkit', 'Xcode Simulator', 'Figma']} />
        </div>

        {/* ========== skyticket ========== */}
        <div className="mb-12">
          <h3 className="text-base font-bold">
            {t(
              '🏢 skyticket（업무위탁・2021/05〜2023/07）',
              '🏢 skyticket（業務委託・2021/05〜2023/07）'
            )}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {t('여행・호텔 업계', '旅行・ホテル業界')}
          </p>
          <p className="mt-3 text-sm font-medium">
            {t(
              'MAU 700만 규모의 호텔·투어·항공권 예약 시스템 개발·운용',
              'MAU700万規模のホテル・ツアー・航空券予約システム開発・運用'
            )}
          </p>

          {/* ── ホテルチーム ── */}
          <h4 className="mt-6 text-sm font-bold">
            {t('◉ 호텔팀', '◉ ホテルチーム')}
          </h4>
          <ul className="mt-2 text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li>
              {t(
                '호텔·투어·항공권 예약 시스템 및 캠페인 페이지 개발, 트러블 대응',
                'ホテル・ツアー・航空券予約システムおよびキャンペーンページ開発、トラブル対応'
              )}
            </li>
            <li>
              {t(
                'E2E 테스트(Cypress) 도입으로 디그레 체크 및 테스트 시간 단축',
                'E2Eテスト（Cypress）導入でデグレチェックおよびテスト時間短縮'
              )}
            </li>
          </ul>

          <ChallengeTable
            language={language}
            items={[
              {
                challenge: (
                  <>
                    <strong>{language === 'ko' ? 'Web Components 글로벌 네비게이션' : 'Web Componentsグローバルナビゲーション'}</strong>
                    <br />
                    {language === 'ko'
                      ? 'PHP(항공), Vue(렌터카), React(호텔) 등 이기종 기술 스택으로 구성된 서비스들의 상단 네비게이션이 각각 별도로 구현되어 있어, 디자인이나 링크를 변경할 때마다 모든 서비스 담당자가 개별 대응해야 하는 상황이었다.'
                      : 'PHP（航空）、Vue（レンタカー）、React（ホテル）など異なる技術スタックで構成されたサービスの上部ナビゲーションがそれぞれ別途実装されており、デザインやリンクを変更するたびに全サービス担当者が個別対応する必要があった。'}
                  </>
                ),
                result: language === 'ko'
                  ? 'Web Components(Lit)를 활용해 기술 스택에 의존하지 않는 통합 글로벌 네비게이션을 설계·개발. Shadow DOM으로 캡슐화하여 기존 서비스의 스타일 충돌 없이 도입. 프로젝트 시작부터 유지보수까지 단독 담당'
                  : 'Web Components（Lit）を活用し技術スタックに依存しない統合グローバルナビゲーションを設計・開発。Shadow DOMでカプセル化し既存サービスのスタイル衝突なく導入。プロジェクト開始から保守まで単独担当',
              },
              {
                challenge: (
                  <>
                    <strong>{language === 'ko' ? 'SEO 리포지토리 통합' : 'SEOリポジトリ統合'}</strong>
                    <br />
                    {language === 'ko'
                      ? 'SEO 전용 페이지가 별도 리포지토리로 분리 운영되고 있어, 호텔 API·리스트·가격 등의 로직이 본체와 중복되고 있었다. URL 패턴 관리도 복잡화되어 있어 유지보수 비용이 높아지고 있었다.'
                      : 'SEO専用ページが別リポジトリで分離運用されており、ホテルAPI・リスト・価格などのロジックが本体と重複していた。URLパターン管理も複雑化し、保守コストが増大していた。'}
                  </>
                ),
                result: language === 'ko'
                  ? '통합을 제안·주도. 컴포넌트 경계를 재정의(organisms = 앱 플로우 / uiParts = 콘텐츠·URL 기반)하고, URL·SSR·중복 API 정리를 실행하여 단일 리포지토리로 통합'
                  : '統合を提案・主導。コンポーネント境界を再定義（organisms＝アプリフロー / uiParts＝コンテンツ・URL基盤）し、URL・SSR・重複API整理を実行して単一リポジトリに統合',
              },
              {
                challenge: (
                  <>
                    <strong>{language === 'ko' ? '호텔 기능 개발' : 'ホテル機能開発'}</strong>
                    <br />
                    {language === 'ko'
                      ? 'MAU 700만 규모의 호텔 예약 서비스에서 검색 기능의 확장 요구와 해외 호텔 대응이 필요했다. 또한 CSR 기반으로 구현되어 있어 초기 표시 속도가 느리고 SEO 성능에 한계가 있었다.'
                      : 'MAU700万規模のホテル予約サービスで検索機能の拡張要求と海外ホテル対応が必要だった。またCSR基盤で実装されており初期表示速度が遅く、SEOパフォーマンスに限界があった。'}
                  </>
                ),
                result: language === 'ko'
                  ? '성인/어린이별 검색, 단체 예약용 다중 객실 검색 기능 추가. 해외 호텔 검색 메인 페이지 신규 작성. CSR→SSR/SSG(ISR) 전환으로 초기 표시 속도 및 SEO 성능 향상. Google Tag Manager와 dataLayer 구축으로 웹 분석 시스템 구현'
                  : '大人・子供別検索、団体予約用複数部屋検索機能追加。海外ホテル検索メインページ新規作成。CSR→SSR/SSG（ISR）変更で初期表示速度およびSEOパフォーマンス向上。Google Tag ManagerとdataLayer構築でWeb分析システム実装',
              },
            ]}
          />

          {/* ── SEO対応チーム ── */}
          <h4 className="mt-8 text-sm font-bold">
            {t('◉ SEO 대응팀', '◉ SEO対応チーム')}
          </h4>
          <ul className="mt-2 text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li>
              {t(
                '메인 프론트엔드 엔지니어로서 SEO 개선 작업을 주도',
                'メインフロントエンドエンジニアとしてSEO改善作業を主導'
              )}
            </li>
            <li>
              {t(
                '디렉터·외부 SEO 컨설턴트·디자이너·백엔드 엔지니어와 협업하여 SEO 전용 페이지 기획부터 구현까지 담당',
                'ディレクター・外部SEOコンサルタント・デザイナー・バックエンドエンジニアと協業し、SEO専用ページの企画から実装まで担当'
              )}
            </li>
          </ul>

          <ChallengeTable
            language={language}
            items={[
              {
                challenge: (
                  <>
                    <strong>{language === 'ko' ? 'Core Web Vitals 개선' : 'Core Web Vitals改善'}</strong>
                    <br />
                    {language === 'ko'
                      ? 'Core Web Vitals 스코어가 "개선 필요(황색)"으로, UX 품질과 Google 검색 순위 양쪽에 부정적인 영향을 미치고 있었다. 이미지 최적화와 렌더링 성능 개선이 시급했다.'
                      : 'Core Web Vitalsスコアが「改善が必要（黄色）」で、UX品質とGoogle検索順位の双方に悪影響を及ぼしていた。イメージ最適化とレンダリングパフォーマンス改善が急務だった。'}
                  </>
                ),
                result: language === 'ko'
                  ? 'FCP/LCP/CLS/FID 개선 + 이미지 최적화를 실시하여 Lighthouse 스코어를 "양호(녹색)"으로 향상. 링크·메타데이터 설정과 canonical tag를 활용한 URL 정규화 구현'
                  : 'FCP/LCP/CLS/FID改善＋イメージ最適化を実施し、Lighthouseスコアを「良好（緑色）」に向上。リンク・メタデータ設定とcanonical tagを活用したURL正規化実装',
              },
              {
                challenge: (
                  <>
                    <strong>{language === 'ko' ? '데이터 기반 SEO 페이지 대량 생성' : 'データ基盤SEOページ大量生成'}</strong>
                    <br />
                    {language === 'ko'
                      ? '호텔·온천 등의 SEO 랜딩 페이지를 수동으로 작성하기에는 대상이 너무 방대했다. 디렉터·외부 SEO 컨설턴트와 협업하여 검색 유입을 강화할 테마 페이지가 필요했으나, 콘텐츠 데이터를 수집·가공하는 자동화 파이프라인이 없었다.'
                      : 'ホテル・温泉などのSEOランディングページを手動で作成するには対象が膨大だった。ディレクター・外部SEOコンサルタントと協業して検索流入を強化するテーマページが必要だったが、コンテンツデータを収集・加工する自動化パイプラインがなかった。'}
                  </>
                ),
                result: language === 'ko'
                  ? '스프레드시트에서 데이터를 추출하여 페이지를 자동 생성하는 시스템을 구축. 또한 2개의 외부 API(외부 리뷰 시스템 yotpo, Google BigQuery)에서 정보를 통합하여 SEO 페이지를 생성하는 파이프라인을 구현. 구조화 마크업·canonical tag·BreadCrumb도 함께 구현하여 검색 유입을 강화'
                  : 'スプレッドシートからデータを抽出してページを自動生成するシステムを構築。また2つの外部API（外部レビューシステムyotpo、Google BigQuery）から情報を統合してSEOページを生成するパイプラインを実装。構造化マークアップ・canonical tag・BreadCrumbも合わせて実装し、検索流入を強化',
              },
            ]}
          />

          <TechTags items={['Next.js', 'React', 'TypeScript', 'Styled Components', 'Redux', 'Express', 'Web Components', 'Lit', 'Storybook', 'Cypress']} />
        </div>

        {/* ========== Web Game ========== */}
        <div className="mb-12">
          <h3 className="text-base font-bold">
            {t(
              '🏢 웹 게임 개발（업무위탁・2020/12〜2021/04）',
              '🏢 Webゲーム開発（業務委託・2020/12〜2021/04）'
            )}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {t('웹 게임 업계', 'Webゲーム業界')}
          </p>
          <ul className="mt-3 list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>{t('레거시 코드 리팩토링 및 서비스 리뉴얼 대응', 'レガシーコード最新化と既存の不具合修正を担当し、システムのリニューアルに対応')}</li>
          </ul>
          <TechTags items={['JavaScript', 'Node.js', 'Pixi.js']} />
        </div>

        {/* ========== Java 풀스택 프리랜서 ========== */}
        <div className="mb-12 rounded border border-border/50 p-5">
          <h3 className="text-base font-bold mb-4">
            {t('☕ Java 풀스택 프로젝트', '☕ Java フルスタックプロジェクト')}
          </h3>

          <div className="mb-6">
            <h4 className="text-sm font-semibold">
              {t('주식 투자 정보 검색 서비스（2020/01〜2020/11）', '株式投資情報検索サービス（2020/01〜2020/11）')}
            </h4>
            <p className="text-xs text-muted-foreground mt-0.5">{t('증권 업계', '証券業界')}</p>
            <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>{t('메인 SE로 참가, 기술 스택 설계 및 환경 구축', 'メインSEとして参加、技術スタック設計および環境構築')}</li>
              <li>{t('주식 종목 검색, 기간별 분석 결과 기능 개발', '株式銘柄検索、期間別分析結果機能開発')}</li>
            </ul>
            <TechTags items={['Java', 'Spring Boot', 'PostgreSQL', 'MyBatis', 'JavaScript', 'jQuery']} />
          </div>

          <div>
            <h4 className="text-sm font-semibold">
              {t('물류・재고관리 시스템（2019/08〜2019/12）', '物流・在庫管理システム（2019/08〜2019/12）')}
            </h4>
            <p className="text-xs text-muted-foreground mt-0.5">{t('물류 업계', '物流業界')}</p>
            <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>{t('소비세 증세(8%→10%) 대응 기반 시스템 수정', '消費税増税（8%→10%）に対応して基盤システム修正')}</li>
              <li>{t('품목·종별 재고관리, 집계 시스템, CSV/Excel 출력 기능 개발', '品目・種別別在庫管理、集計システム、CSV/Excel出力機能開発')}</li>
            </ul>
            <TechTags items={['Java', 'JavaScript', 'PostgreSQL']} />
          </div>
        </div>

        {/* ========== GROP SC 정사원 ========== */}
        <div className="mb-10 rounded border border-border/50 p-5">
          <h3 className="text-base font-bold mb-1">
            {t(
              '🏢 株式会社GROP SC（정사원・2018/04〜2019/06）',
              '🏢 株式会社GROP SC（正社員・2018/04〜2019/06）'
            )}
          </h3>
          <p className="text-xs text-muted-foreground mb-4">
            {t('시스템 솔루션부', 'システムソリューション部')}
          </p>

          <div className="mb-6">
            <h4 className="text-sm font-semibold">
              {t('전기 제어·하네스 설계 소프트웨어（2019/01〜2019/06）', '電気制御・ハーネス設計ソフトウェア（2019/01〜2019/06）')}
            </h4>
            <p className="text-xs text-muted-foreground mt-0.5">{t('제조 업계', '製造業界')}</p>
            <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>{t('Windows 네이티브 데스크탑 프로그램 개발', '電気・ハーネス設計用Windowsネイティブデスクトッププログラム開発')}</li>
              <li>{t('고객별 버전 커스터마이징 및 해외 문의 대응', '顧客別バージョンカスタマイズ保守、海外問い合わせ対応')}</li>
            </ul>
            <TechTags items={['Java', 'C#', 'Oracle', 'JavaScript']} />
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-semibold">
              {t('부품 정보 검색 시스템（2018/09〜2018/12）', '部品情報検索システム（2018/09〜2018/12）')}
            </h4>
            <p className="text-xs text-muted-foreground mt-0.5">{t('제조 업계', '製造業界')}</p>
            <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>{t('사내 부품 등록·검색 화면 개발 및 테스트 케이스 작성', '社内部品登録・検索画面開発、テストケース作成')}</li>
            </ul>
            <TechTags items={['Java', 'PostgreSQL', 'JavaScript', 'jQuery']} />
          </div>

          <div>
            <h4 className="text-sm font-semibold">
              {t('보험 서비스 간 통합 인증 시스템 SSO（2018/04〜2018/08）', '保険サービス間の統合認証システム SSO（2018/04〜2018/08）')}
            </h4>
            <p className="text-xs text-muted-foreground mt-0.5">{t('보험 업계', '保険業界')}</p>
            <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>{t('기존 서비스와 신규 서비스 통합, 레거시 코드 최신화', '既存サービスと新規サービス統合、レガシーコード最新化')}</li>
            </ul>
            <TechTags items={['Java', 'JavaScript', 'DB2']} />
          </div>
        </div>
      </section>

      <hr className="border-border/50 mb-10" />

      {/* ===== 기술 스택 ===== */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-bold">
          {t('🛠 기술 스택', '🛠 技術スタック')}
        </h2>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-muted/30">
              <th className="border border-border/60 px-3 py-2 text-left font-medium w-[30%]">
                {t('분류', '種類')}
              </th>
              <th className="border border-border/60 px-3 py-2 text-left font-medium">
                {t('기술', '技術')}
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { category: t('언어', '言語'), skills: 'TypeScript, JavaScript, Java, HTML, CSS' },
              { category: t('프레임워크', 'フレームワーク'), skills: 'React, Next.js, Vue.js, Spring Boot' },
              { category: t('스타일링', 'スタイリング'), skills: 'Tailwind CSS, SCSS, Styled Components' },
              { category: t('테스팅', 'テスト'), skills: 'Playwright, Cypress, Storybook, Jest' },
              { category: 'DB', skills: 'PostgreSQL, MongoDB, Oracle, Supabase' },
              { category: t('인프라・도구', 'インフラ・ツール'), skills: 'Docker, AWS, Firebase, Git, Figma' },
            ].map((row, i) => (
              <tr key={i}>
                <td className="border border-border/60 px-3 py-2 font-medium">{row.category}</td>
                <td className="border border-border/60 px-3 py-2 text-muted-foreground">{row.skills}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr className="border-border/50 mb-10" />

      {/* ===== 챗봇 섹션 ===== */}
      <ChatbotSection language={language} />

      {/* ===== 개인 프로젝트 ===== */}
      <section className="mb-10">
        <h2 className="mb-6 text-lg font-bold">
          {t('🌟 개인 프로젝트', '🌟 個人プロジェクト')}
        </h2>

        <div className="space-y-6">
          {/* 블로그 */}
          <div className="border-b border-border/30 pb-6">
            <h3 className="text-sm font-bold">
              {t('개인 블로그 플랫폼', '個人ブログプラットフォーム')}
              <span className="ml-2 text-xs font-normal text-muted-foreground">mintora.me</span>
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(
                'Next.js와 MDX를 활용한 정적 블로그. 다크모드, 다국어 지원(한국어/일본어), GitHub Pages 호스팅.',
                'Next.jsとMDXを活用した静的ブログ。ダークモード、多言語対応（日本語/韓国語）、GitHub Pagesホスティング。'
              )}
            </p>
            <TechTags items={['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MDX']} />
            <div className="mt-2 flex gap-3">
              <a href="https://github.com/ho1112/choco-mint" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <IconGithub className="h-5 w-5" />
              </a>
              <a href={`/blog/${language}/`} className="text-muted-foreground hover:text-foreground transition-colors">
                <IconExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* AI 페르소나 봇 */}
          <div className="border-b border-border/30 pb-6">
            <h3 className="text-sm font-bold">
              {t('AI 페르소나 봇 댓글 자동화 시스템', 'AIペルソナボットコメント自動化システム')}
              <span className="ml-2 text-xs font-normal text-muted-foreground">Dead Internet Theory</span>
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(
                '4개의 AI 페르소나가 블로그 포스트에 자동으로 댓글을 생성. GitHub Actions Cron으로 24시간 자동화, Gemini AI 활용.',
                '4つのAIペルソナがブログポストに自動的にコメントを生成。GitHub Actions Cronで24時間自動化、Gemini AI活用。'
              )}
            </p>
            <TechTags items={['Next.js', 'TypeScript', 'Google Gemini API', 'Supabase', 'GitHub Actions']} />
            <div className="mt-2 flex gap-3">
              <a href="https://github.com/ho1112/dead-internet-theory" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <IconGithub className="h-5 w-5" />
              </a>
              <a href={`/blog/${language}/codeLab/dead-internet-theory`} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 text-xs">
                <IconBlog className="h-5 w-5" /> post
              </a>
            </div>
          </div>

          {/* RAG 챗봇 */}
          <div className="border-b border-border/30 pb-6">
            <h3 className="text-sm font-bold">
              {t('AI 기반 인터랙티브 포트폴리오 챗봇', 'AI基盤インタラクティブポートフォリオチャットボット')}
              <span className="ml-2 text-xs font-normal text-muted-foreground">Its Me</span>
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(
                'RAG 기반 대화형 포트폴리오 챗봇. LangChain + Gemini + Supabase, Shadow DOM으로 외부 사이트 임베딩 가능.',
                'RAG基盤の対話型ポートフォリオチャットボット。LangChain + Gemini + Supabase、Shadow DOMで外部サイト埋め込み可能。'
              )}
            </p>
            <TechTags items={['Next.js', 'TypeScript', 'LangChain', 'Google Gemini API', 'Supabase', 'Vite']} />
            <div className="mt-2 flex gap-3">
              <a href="https://github.com/ho1112/its-me" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <IconGithub className="h-5 w-5" />
              </a>
              <a href={`/blog/${language}/codeLab/its-me`} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 text-xs">
                <IconBlog className="h-5 w-5" /> post
              </a>
              <ChatbotButton language={language} />
            </div>
          </div>

          {/* 배당금 LINE봇 */}
          <div className="border-b border-border/30 pb-6">
            <h3 className="text-sm font-bold">
              {t('SBI 증권 배당금 자동 수집 LINE 알림 봇', 'SBI証券配当金自動取得LINE通知Bot')}
              <span className="ml-2 text-xs font-normal text-muted-foreground">cha-LINE</span>
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(
                'SBI 증권에서 배당금 정보를 Playwright로 자동 수집하여 LINE으로 통지. GCP VM + Express.js 운영.',
                'SBI証券から配当金情報をPlaywrightで自動収集しLINEで通知。GCP VM + Express.jsで運用。'
              )}
            </p>
            <TechTags items={['TypeScript', 'Playwright', 'Express', 'LINE Messaging API', 'Google Apps Script', 'GCP VM']} />
            <div className="mt-2 flex gap-3">
              <a href="https://github.com/ho1112/cha-line" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <IconGithub className="h-5 w-5" />
              </a>
              <a href={`/blog/${language}/codeLab/cha-line`} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 text-xs">
                <IconBlog className="h-5 w-5" /> post
              </a>
            </div>
          </div>

          {/* CSS 린터 */}
          <div>
            <h3 className="text-sm font-bold">
              CSS Linter
              <span className="ml-2 text-xs font-normal text-muted-foreground">style-sentry</span>
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(
                'CSS 코딩 스탠다드 자동 검증 린터. 미사용 CSS 클래스 자동 검출, VSCode 확장 + npm CLI 도구로 제공.',
                'CSSコーディングスタンダード自動検証リンター。未使用CSSクラス自動検出、VSCode拡張＋npm CLIツールとして提供。'
              )}
            </p>
            <TechTags items={['Node.js', 'TypeScript', 'PostCSS', 'VSCode Extension API']} />
            <div className="mt-2 flex gap-3">
              <a href="https://github.com/ho1112/style-sentry" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <IconGithub className="h-5 w-5" />
              </a>
              <a href="https://www.npmjs.com/package/style-sentry" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <IconNpm className="h-8 w-8" />
              </a>
              <a href="https://marketplace.visualstudio.com/items?itemName=leehoyeon.style-sentry-vscode" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <IconVSCode className="h-5 w-5" />
              </a>
              <a href={`/blog/${language}/codeLab/style-sentry`} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 text-xs">
                <IconBlog className="h-5 w-5" /> post
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
